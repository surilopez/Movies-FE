import { rejects } from 'assert';
import { resolve } from 'dns';

export function toBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error);
  })
}


export function ParseErrorsAPI(response: any): string[] {

  const result: string[] = [];

  if (response.error) {
    if (typeof response.error === 'string') {
      result.push(response.error)
    } else {
      const errorMap = response.error.errors;
      const entries = Object.entries(errorMap);
      entries.forEach((array: any[]) => {
        const field = array[0];
        array[1].forEach((errorMessage: any) => {
          result.push(`${field}:${errorMessage}`)
        });
      })
    }
  }

  return result;
}
