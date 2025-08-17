import { LIMIT_DATA } from "src/common/app";

export const checkIsEmail = (second) => {
  
};

export function getPageLimitSkip(query: { [key: string]: any }) {
  const page = Number(query?.page || 1);
  const limit = Number(query?.limit || LIMIT_DATA);
  const skip = (page - 1) * limit;
  return {
    page,
    limit,
    skip,
  };
}