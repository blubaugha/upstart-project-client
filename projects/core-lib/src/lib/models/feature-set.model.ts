import { FeatureSetType } from './feature-set-type.model';

export interface FeatureSet {
  id: string;
  name: string;
  type: FeatureSetType;
  description: string;
  helpDescription: string;
  image: string;
  created: Date;
  lastModified: Date;
}
