interface Command {
  value: string;
  timestamp: Date;
}

interface Project {
  createdAt: string;
  description: string;
  isOpenSource: boolean;
  name: string;
  url: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
