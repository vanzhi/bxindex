import Vuex from 'vuex'
import Vue from 'vue'
import {API_GetMenuList} from '@/fetch/restApi'
const def = store => {
    store.dispatch('getMenuList')
}

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menuList: [],
        firstLevelMenuList: [],
        secondLevelMenuListById: {},
        query: {
            firstNodeId: '',
            secondNodeId: '',
            thirdNodeId: '',
        },
        pNodeId: 0,
        currentNodeId: 0,
        thirdNodeId: 0
    },
    getters: {
        firstLevelMenuList : state => {
            return state.firstLevelMenuList
        },
        secondLevelMenuListById : state => {
            return state.secondLevelMenuListById
        },
        query : state => state.query,
        // 当前二级menuList
        menuList : state => state.menuList,
        // 一级栏目id
        pNodeId : state => state.pNodeId,
        // 二级栏目id
        currentNodeId : state => state.currentNodeId,
        // 内容索引
        thirdNodeId : state => state.thirdNodeId,
        // 当前节点
        currentNode(state) {
            for (let i = 0; i < state.menuList.length; i++) {
                if (state.menuList[i].nodeId === state.currentNodeId) {
                    return state.menuList[i]
                }
            }
            return {}
        },
        // 父节点
        pNode(state) {
            for (let i = 0; i < state.firstLevelMenuList.length; i++) {
                if (state.firstLevelMenuList[i].nodeId === state.pNodeId) {
                    return state.firstLevelMenuList[i]
                }
            }
            return {}
        }
    },
    actions: {
        getMenuList: ({commit}, playload) => {
            API_GetMenuList().then(success => {
                commit('setMenuList', success.data)
                commit('setMenuList', success.data)
            }).catch(error => {
                
            })
        },
        setRouteQuery({commit}, playload) {
            commit('setRouteQuery', playload)
        }
    },
    mutations: {
        setMenuList: (state, playload) => {
            state.menuList = playload && playload.length && playload[0].childs || []
            state.firstLevelMenuList = [];
            state.secondLevelMenuListById = {};
            for (let i = 0; i < state.menuList.length; i++) {
                state.firstLevelMenuList.push(state.menuList[i])
                state.secondLevelMenuListById[state.menuList[i].nodeId] = state.menuList[i].childs
            }
            // 更新currentId信息
            state.menuList = state.secondLevelMenuListById[state.pNodeId] || []
            state.currentNodeId = Number(state.query.secondNodeId) || (state.menuList[0] && state.menuList[0].nodeId) || 0
        },
        setRouteQuery: (state, playload) => {
            state.query = playload
            state.pNodeId = Number(state.query.firstNodeId) || 0
            state.thirdNodeId = Number(state.query.thirdNodeId) || -1
            state.menuList = state.secondLevelMenuListById[state.pNodeId] || []
            state.currentNodeId = Number(state.query.secondNodeId) || (state.menuList[0] && state.menuList[0].nodeId) || 0
        },
    },
    plugins: [def]
})