import { request } from "./api";
import { BASE_URL } from "./constants";

export const setCookie = (name: string, value: string, props: { [key: string]: any } & { expires?: number | Date | string } = {}
): void => {
   props = props || {};
   let exp = props.expires;
   if (typeof exp == 'number' && exp) {
      const d = new Date();
      d.setTime(d.getTime() + exp * 1000);
      exp = props.expires = d;
   }
   if (exp && (exp as Date).toUTCString) {
      props.expires = (exp as Date).toUTCString();
   }
   value = encodeURIComponent(value);
   let updatedCookie = name + '=' + value;
   for (const propName in props) {
      updatedCookie += '; ' + propName;
      const propValue = props[propName];
      if (propValue !== true) {
         updatedCookie += '=' + propValue;
      }
   }
   document.cookie = updatedCookie;
}

export const getCookie = (name: string): (string | undefined) => {
   const matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
   );
   return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const refreshToken = () => {
   const url = `${BASE_URL}/auth/token`;
   const options = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         token: getCookie('refresh')
      })
   };
   request(url, options)
      .catch(console.warn)
}
