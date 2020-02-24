//TO ADD A TYPE
//STEP 1) add it tot he data modle
/prisma/prisma-datamodel.graphql

//Simple type
type TestTypeName {
  id: ID! @id // @id is make postress happy
  key: String! //simple types self reslove
}


//RELATINAL TYPE BY FORIN KEY
type TestTypeName {
  id: ID! @id // @id is make postress happy
  key: String! //simple types self reslove
  keyofforwinkey: ForwinKeyType!
}

type ForwinKeyType {
  id: ID! @id
  key: String!
  testtypename: [TestTypeName!]! // "!" means "requiered", in this exsample to preveent "null" breaks an []! and the forwen data set it would link to are "requiered", so that no data == [] or empty array
}

//STEP 2) DEPLY THE CHANGE
npx prisma deploy
// you can verify them in the terminal output and in the http://localhost:7000/

//STEP 3) update schema
apollo/src/schema.js

type TestTypeName {
  id: ID! //removbe the "@id" as it is not needed or suported here
  key: String!
  keyofforwinkey: ForwinKeyType!
}
type ForwinKeyType {
  id: ID! //removbe the "@id" as it is not needed or suported here
  key: String!
  testtypename: [TestTypeName!]!
}

//STEP 4) now you need RESOLVERS to Resolve "keyofforwinkey: ForwinKeyType" relationship

4-1) FISRT: Make the files that match the type names
apollo/src/resolvers/TestTypeName.js
apollo/src/resolvers/ForwinKeyType.js

4-2) Add to the index import exports
apollo/src/resolvers/index.js
//START
const TestTypeName = require('./TestTypeName');
const ForwinKeyType = require('./ForwinKeyType');

const resolvers = {
  TestTypeName,
  ForwinKeyType
};
module.exports = resolvers;
//END

4-3) MAKE THE RESOLVER FUNTION
apollo/src/resolvers/TestTypeName.js//make the file
//START
//Name funtion for relationship to this Type key "keyofforwinkey: ForwinKeyType"
const keyofforwinkey = (parent, args, context, info) => {

  // comes from relatinal key TYPE(right side)
  // as it relates in "ForwinKeyType"
  //    "testtypename: [TestTypeName!]!"
  // but lowercase????
  const res = context.prisma.testTypeName({ id: parent.id }).keyofforwinkey(); // invoke the name of this funtion()

  return res;
};

module.exports = {
  keyofforwinkey,
};
//END
apollo/src/resolvers/ForwinKeyType.js//make the file
//START
const testtypename = (parent, args, context, info) => {

  const res = context.prisma.forwinKeyType({ id: parent.id }).testtypename(); // invoke the name of this funtion()

  return res;
};

module.exports = {
  testtypename,
};
//END

4-4) ADD TO QUIEREYS
apollo/src/resolvers/Query.js//EDIT the file
//START
const testtypes = (parent, args, context) => { // "testtypes" is FOOBAR but must be the same here and in step 4-5
  const res = context.prisma.testTypeNames(); // "testTypeNames()" is genrated by Prisma based on type name, see http://localhost:7000/ and make sure called right
  return res;
};

const forwinKeyTypesFooBar = (parent, args, context) => {
  const res = context.prisma.forwinKeyTypes();
  return res;
};

module.exports = {
  testtypes,
  forwinKeyTypesFooBar,
};
//END

4-5) add new quiers to the schema
apollo/src/schema.js
//START
const typeDefs = gql`
  type Query {
    //add them here
    testtypes: [TestTypeName!]! // "testtypes" is FOOBAR came from step 4-4 while "TestTypeName" came from schema type name in step 2
    forwinKeyTypesFooBar: [ForwinKeyType!]!
  }
//END

//STEP 5 5) make the mutations to create/edit these
5-1) add create to mutian in schema
apollo/src/schema.js
//START EDIT
type Mutation {
  createForwinKeyTypeFooBar(key: String!): ForwinKeyType!
  createTestTypeNameFooBar(key: String!, forwinId: ID!): TestTypeName!
}
/*
  createForwinKeyTypeFooBar() == what you call it in apollo/src/resolvers/Mutation.js
  key: String! == as created in that type in Ghraph/schema
  ForwinKeyType! == what is rteturned on sucess, in this cass this Type and its Resolver
*/
//END EDIT

5-2) add mutioan to mutations resolvers
apollo/src/resolvers/Mutation.js
//START EDIT
const createForwinKeyTypeFooBar = (parent, args, context) => {
  const fooBarNess = context.prisma.createForwinKeyType({
    key: args.key
  });

  return fooBarNess;
};
/*
  createForwinKeyType() == what Prisma crewated based on Type name
  args == what you passed in from type Mutation { in schema.js above
    or
    args.key == createForwinKeyTypeFooBar(key:
  createForwinKeyTypeFooBar == what you plan to use in your mutaion quiery to call this end point ad add to schema
*/


const createTestTypeNameFooBar = (parent, args, context) => {
  const fooBarNess = context.prisma.createTestTypeName({
    key: args.key,
    keyofforwinkey: { connect: { id: args.forwinId } }
  });

  return fooBarNess;
};
/*
  createTestTypeNameFooBar == what you plan to use in your mutaion quiery to call this end point ad add to schema
  createTestTypeName() == what Prisma crewated based on Type name
  args == what you passed in from type Mutation see above 5-2 funtion for clerity

  keyofforwinkey: { connect: { id: args.forwinId } }
    keyofforwinkey == key from schema "keyofforwinkey: ForwinKeyType!"
    connect: == KEY TERM to LINK to TESTED VALID FORWIN VALUE
      in this case "{ id: args.forwinId }" or the ID pased is valid for "ForwinKeyType!" that is the value of "keyofforwinkey"
*/


module.exports = {
  createForwinKeyTypeFooBar,
  createTestTypeNameFooBar,
};
//END EDIT
