import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql';

import { FilterIsNullable } from 'src/workspace/workspace-schema-builder/graphql-types/input/filter-is-nullable.input-type';

export const IntFilterType = new GraphQLInputObjectType({
  name: 'IntFilter',
  fields: {
    eq: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    neq: { type: GraphQLInt },
    is: { type: FilterIsNullable },
  },
});
