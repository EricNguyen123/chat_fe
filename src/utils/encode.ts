import { setEncode } from ".";

export const encode = async (value: any): Promise<string> => {
  try {
    const hash = await setEncode(value);
    return hash;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
