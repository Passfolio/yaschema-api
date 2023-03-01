import type { SingleOrArray } from 'yaschema';

import type { AnyStringSerializableType } from './AnyStringSerializableType';
import type { ApiRequest } from './ApiRequest';

export type GenericApiRequest = ApiRequest<
  Record<string, AnyStringSerializableType>,
  Record<string, AnyStringSerializableType>,
  Record<string, SingleOrArray<AnyStringSerializableType>>,
  any
>;