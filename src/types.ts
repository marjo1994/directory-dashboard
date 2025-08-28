export type StorageItem = {
  type: string;
  value: number;
  color: string;
};

export type User = {
  id: string;
  borderColor?: string;
};

export type AvatarStackProps = {
  users: User[];
  max?: number;
};
