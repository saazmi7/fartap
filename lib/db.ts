const tapStore = new Map<number, number>();

export async function incrementTap(fid: number) {
  const current = tapStore.get(fid) || 0;
  tapStore.set(fid, current + 1);
}

export async function getTaps(fid: number) {
  return tapStore.get(fid) || 0;
}
