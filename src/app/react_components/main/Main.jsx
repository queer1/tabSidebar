﻿/** @jsx React.DOM */
'use strict';

var BottomBar = require('../menus/BottomBar.jsx');
var Constants = require('../util/Constants.js');
var GroupCreator = require('../groups/GroupCreator.jsx');
var Helpers = require('../util/Helpers.js');
var MenuBar = require('../menus/MenuBar.jsx');
var Preview = require('../preview/Preview.jsx');
var RecentList = require('../recent/RecentList.jsx');
var SearchBar = require('../filtering/SearchBar.jsx');
var TabList = require('../tabs/TabList.jsx');
module.exports = React.createClass({
  getInitialState: function () {
   
    if (GroupManager.getActiveGroupId() == 0){
      GroupManager.setActiveGroupId(Constants.groups.ALL_GROUP_ID);
    }
    return {
      viewState: Constants.viewStates.NORMAL_VIEW,
      column: Constants.menus.menuBar.viewActions.SINGLE_COLUMN,
      showCloseButtons: true,
      showGroups: true,
      showNewOnTabs: true,
      twoGroupColumns: true,
      preview: false
    };
  },
  componentWillMount: function () {
    var self = this;
    var state = Persistency.getState();
   
    self.setState({
      viewState: state.tabSettings.viewState,
      column: state.tabSettings.column,
      showCloseButtons: state.tabSettings.showCloseButtons,
      showGroups: state.groupSettings.showGroups,
      showNewOnTabs: state.tabSettings.showNewOnTabs,
      twoGroupColumns: state.groupSettings.twoGroupColumns,
      preview: state.previewArea.show
    });
    
  },

  handleCollapseTabs: function () {
    this.refs[Constants.refs.TAB_LIST].collapseTabs();
  },
  handleColumnChange: function (column) {
    Persistency.updateState({ tabSettings: {column: column }});
    this.setState({ column: column });
  },
  handleGroupColumnChange: function (column) {
    var twoGroupColumns = column == Constants.menus.menuBar.viewActions.DOUBLE_COLUMN_GROUP;
    Persistency.updateState({ groupSettings: {twoGroupColumns: twoGroupColumns}});
    this.setState({ twoGroupColumns: twoGroupColumns });
  },
  handleEditTabGroup: function (group, callback) {
    this.refs[Constants.refs.GROUP_CREATOR].showDialog(group, callback);
  },
  handleExpandTabs: function () {
    this.refs[Constants.refs.TAB_LIST].expandTabs();
  },
  handleNewTabGroup: function () {
    this.refs[Constants.refs.GROUP_CREATOR].showDialog();
  },
  handleNewTabGroupCreated: function (name, color, filter) {
    this.refs[Constants.refs.TAB_LIST].createNewGroup(name, color, filter);
  },
  handlePreview: function (img, title) {
    if (this.refs[Constants.refs.PREVIEW]) {
      this.refs[Constants.refs.PREVIEW].setState({preview:img, title:title});
    }
  },
  handleStatisticsUpdate: function () {
    if (this.refs[Constants.refs.PREVIEW]) {
      this.refs[Constants.refs.PREVIEW].updateStatistics();
    }
  },
  handlePreviewDisplay: function (show) {
    Persistency.updateState({previewArea: { show: show }});
    
    this.setState({ preview: show });
  },
  handleScrollToTop: function () {
    if(this.refs[Constants.refs.TAB_LIST].state.isVisible) {
      Helpers.scrollTo(React.findDOMNode(this.refs[Constants.refs.TAB_LIST]), 0, 200);
    }
    if(this.refs[Constants.refs.RECENT_LIST].state.isVisible) {
      Helpers.scrollTo(React.findDOMNode(this.refs[Constants.refs.RECENT_LIST]), 0, 200);
    }
  },
  handleSearch: function (query) {
    if(this.refs[Constants.refs.TAB_LIST].state.isVisible) {
      this.refs[Constants.refs.TAB_LIST].searchTabs(query);
    }
    if(this.refs[Constants.refs.RECENT_LIST].state.isVisible) {
      this.refs[Constants.refs.RECENT_LIST].search(query);
    }
  },
  handleSort: function (sort) {
    this.refs[Constants.refs.TAB_LIST].sortTabs(sort);
  },
  handleTabListMouseLeave: function () {
    if (this.refs[Constants.refs.PREVIEW]) {
      this.refs[Constants.refs.PREVIEW].setState({preview:'', title:''});
    }
  },
  handleViewChange: function (view) {
    Persistency.updateState({tabSettings: { viewState: view }});
    this.setState({ viewState: view });
  },
  showRecentTabs: function (showing) {
    this.refs[Constants.refs.TAB_LIST].setState({isVisible: !showing});
    this.refs[Constants.refs.RECENT_LIST].setState({isVisible: showing});
  },
  render: function () {
    
    var preview = {};
    if(this.state.preview) {
      preview = (
        <Preview
          ref = { Constants.refs.PREVIEW } />
        );
    }
    return (
      <div>
        <MenuBar
          handleColumnChange = { this.handleColumnChange }
          handleGroupColumnChange = { this.handleGroupColumnChange }
          handleNewTabGroup = { this.handleNewTabGroup }
          handleViewChange = { this.handleViewChange }
          handlePreviewDisplay = { this.handlePreviewDisplay }
          handleSort = { this.handleSort }
          showGroups = { this.state.showGroups }
          showRecentTabs = { this.showRecentTabs }/>
        <SearchBar 
          onSearch = { this.handleSearch }/>
        <GroupCreator
          ref = { Constants.refs.GROUP_CREATOR }
          handleCreate = { this.handleNewTabGroupCreated }/>
        <RecentList
          ref = { Constants.refs.RECENT_LIST }/> 
        <TabList
          ref = { Constants.refs.TAB_LIST }
          handleEditTabGroup = { this.handleEditTabGroup }
          handleNewTabGroup = { this.handleNewTabGroup }
          handlePreview = { this.handlePreview }
          handleMouseLeave = { this.handleTabListMouseLeave }
          column = { this.state.column }
          showCloseButtons = { this.state.showCloseButtons }
          showGroups = { this.state.showGroups }
          showNewOnTabs = { this.state.showNewOnTabs }
          twoGroupColumns = { this.state.twoGroupColumns }
          viewState = { this.state.viewState }
          handleStatisticsUpdate = { this.handleStatisticsUpdate }
          previewShown = { this.state.preview } />
        { preview }
        <BottomBar 
          column = { this.state.column }
          handleCollapseTabs = { this.handleCollapseTabs }
          handleExpandTabs = { this.handleExpandTabs }
          handleScrollToTop = { this.handleScrollToTop } />
      </div>
    );
  }
});
