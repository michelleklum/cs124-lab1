import "./HomeSearchPage.css";
import React, { Fragment, useState } from "react";
import HomeSearchBar from "./HomeSearchBar";
import ListCard from "../Home/ListCard";

const filterLists = (lists, query) => {
  if (!query) {
    return lists;
  }
  return lists.filter((list) => {
    const listName = list.listName.toLowerCase();
    return listName.includes(query);
  });
};

function HomeSearchPage(props) {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredLists = filterLists(props.data, searchQuery);

  return (
    <Fragment>
      <HomeSearchBar
        onChangePage={props.onChangePage}
        onChangeList={props.onChangeList}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div id="filtered-lists">
        {filteredLists.map((list) => (
          <ListCard
            key={list.id}
            id={list.id}
            listName={list.listName}
            listIcon={list.listIcon}
            onChangePage={props.onChangePage}
            onChangeList={props.onChangeList}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default HomeSearchPage;
