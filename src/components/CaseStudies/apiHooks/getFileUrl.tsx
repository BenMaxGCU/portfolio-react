import Pocketbase, { Record } from 'pocketbase';

const getFileUrl = (record: Record, fileName: string) => {
  const client = new Pocketbase('https://portfolio-pb.fly.dev');

  return client.records.getFileUrl(record, fileName);
};

export default getFileUrl;
