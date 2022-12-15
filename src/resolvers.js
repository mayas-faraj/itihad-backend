import path from 'path'
import { mergeResolvers } from '@graphql-tools/merge'
import { loadFiles } from '@graphql-tools/load-files'
const resolvers = await loadFiles('./*/resolvers.js');
export default mergeResolvers(resolvers);
