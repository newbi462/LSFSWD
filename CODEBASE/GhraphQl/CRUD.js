query {
  testtypes {

  }
}




mutation createNew {
  createForwinKeyTypeFooBar(key: "testKeyValue") {
    id
    key
    testtypename {
      id
    }
  }
}
