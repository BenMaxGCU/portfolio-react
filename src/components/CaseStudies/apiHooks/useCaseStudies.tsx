import Pocketbase, { Record } from 'pocketbase';
import { useQuery } from 'react-query';

export interface Study {
  studyId: string;
  title: string;
  description: string;
  framework: string;
  language: string;
  about: string;
  studyImg: string;
  created: Date;
  routerId: string;
  hostedLink: string;
  hasChildComponent: boolean;
}

const allCaseStudies = async (): Promise<Study[] | Record[]> => {
  const client = new Pocketbase('https://portfolio-pb.fly.dev');
  return await client.records.getFullList('case_studies', 200, {
    sort: '+title',
  });
};

const useCaseStudies = () => {
  return useQuery<Study[] | Record[], Error>(['case_studies'], allCaseStudies, {
    staleTime: Infinity,
  });
};

export default useCaseStudies;
