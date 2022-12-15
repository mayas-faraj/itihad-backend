import { mergeTypeDefs } from '@graphql-tools/merge'
import { loadFiles } from '@graphql-tools/load-files'
const typeDefs = await loadFiles('.', { extenstions: ['gql'] });
export default mergeTypeDefs(typeDefs);
