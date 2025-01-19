// todo types

export type Day = {
  id: string;
  name: string;
};

export type Week = Day[];

export type DayWithIndex = Day & {
  dayIndex: number;
};
