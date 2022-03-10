import { Feature } from './feature.model';

export interface FeatureSet {
  id: string;
  name: string;
  description: string;
  helpDescription: string;
  image: string;
  features: Feature[];
  created: Date;
  lastModified: Date;
}
