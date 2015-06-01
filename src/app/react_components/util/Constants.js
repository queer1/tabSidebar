﻿'use strict';

module.exports = {
  groupCreator: {
    ASCENDING: 'ascending',
    DESCENDING: 'descending',
    LAST_VISITED: 'lastVisited',
    LAST_VISITED_GREATER: 'lastVisitedGreater',
    LAST_VISITED_LOWER: 'lastVisitedLower',
    NONE: 'none',
    OPENED: 'opened',
    OPENED_GREATER: 'openedGreater',
    OPENED_LOWER: 'openedLower',
    TITLE: 'title',
    TITLE_CONTAINS: 'titleContains',
    URL: 'url',
    URL_CONTAINS: 'urlContains'
  },
  globalProperties: {
    LAST_ACTIVE_GROUP: 'lastActiveGroup',
    PERSISTENCY: 'persistency',
    SAME_SESSION: 'sameSession',
    THUMBNAIL_CACHE: 'thumbnailCache',
    THUMBNAIL_CACHE_SIZE: 'thumbnailCacheSize',


    TAB_MANAGER: 'tabManager',
    GROUP_MANAGER: 'groupManager'
  },
  groups: {
    ALL_GROUP_COLOR: '#ff5900',
    ALL_GROUP_ID: 'allGroup',
    TAB_URL_LENGTH: 100
  },
  menus: {
    contextMenu: {
      groupActions: {
        CLONE_GROUP: 'clonegroup',
        CLOSE_GROUP: 'closegroup',
        CLOSE_OTHER_GROUPS: 'closeothergroups',
        EDIT_GROUP: 'editgroup',
        NEW_GROUP: 'newgroup'
      },
      tabActions: {
        CLONE_TAB: 'clonetab',
        CLOSE_TAB: 'closetab',
        CLOSE_OTHER_TABS: 'closeothertabs',
        NEW_TAB: 'newtab',
        PIN_TAB: 'pintab',
        RELOAD_TAB: 'reloadtab',
        UNPIN_TAB: 'unpintab'
      },
      ITEM_HEIGHT: 25,
      MENU_WIDTH: 170
    },
    menuBar: {
      openStates: {
        NONE: 'none',
        VIEW: 'view'
      },
      viewActions: {
        DOUBLE_COLUMN: 'multicolumntabs',
        SINGLE_COLUMN: 'singlecolumntabs'
      }
    },
    menuTypes: {
      DIVIDER: 'divider',
      ITEM: 'item',
      SUBMENU: 'submenu'
    }
  },
  offsets: {
    TAB_LIST_TOP: 63
  },
  paths: {
    OPTIONS: 'app/options.html'
  },
  refs: {    
    COLOR_INPUT: 'colorInput',
    CREATE_TAB_FILTER_CHECKBOX: 'createFilterCheckbox',
    FILTER_BY: 'filterBySelect',
    FILTER_BY_VALUE: 'filterByValue',
    GROUP_CREATOR: 'groupCreator',
    GROUP_CONTEXT_MENU: 'GroupContextMenu',
    GROUP_NAME_INPUT: 'groupNameInput',
    PIN_LIST: 'pin_list',
    RECENT_LIST: 'recentList',
    SEARCH_BOX: 'searchBox',
    SORT_BY: 'sortBySelect',
    SORT_DIRECTION: 'sortDirection',
    TAB_CONTEXT_MENU: 'TabContextMenu',
    TAB_GROUP_CONTAINER: 'tabGroupConteiner',
    TAB_GROUP_LIST: 'tabGroupList',

    TAB_LIST: 'tabList'
  },
  thumbnails: {
    CLEANUP_INTERVAL: 60 * 1000 * 5,
    CRITICAL_CACHE_SIZE: 2000,
    DESIRED_WIDTH: 300,
    MIN_UPDATE_DELAY: 2000
  },
  viewStates: {
    COMPACT_VIEW: 'compactview',
    NORMAL_VIEW: 'normalview',
    SMALL_VIEW: 'smallview',
    THUMBNAIL_VIEW: 'thumbnailview'
  }
}