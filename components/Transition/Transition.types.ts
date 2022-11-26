export type BirdConfig = {
  delay: number;
  size: number;
  positionY: number;
};

export type BirdsState = [birds: BirdConfig[] | [], setWidth: (arg0: BirdConfig[]) => void];
