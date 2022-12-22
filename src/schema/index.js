import path from 'path';
import url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { loadFiles , loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';


//merge typedefs from folders
const typesArray = loadFilesSync(__dirname, { extensions: ['gql'] })
export const typeDefs = mergeTypeDefs(typesArray)

//merge resolvers from folders
export const resolvers = await (async () => {
  const resolversArray = await loadFiles(path.join(__dirname, '*/resolvers.js'), {
    ignoreIndex: true,
    requireMethod: async (path) => {
      return await import(url.pathToFileURL(path));
    },
  });

  return mergeResolvers(resolversArray);

})();
