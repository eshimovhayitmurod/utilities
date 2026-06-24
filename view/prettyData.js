const prettyDate = (value = '') => {
   const isValid = typeof value === 'string' && value;
   const validValue = dateFormatter(value).format('DD.MM.YYYY');
   const date = isValid ? validValue : '—';
   return date;
};
const prettyDateTime = (value = '') => {
   const isValid = typeof value === 'string' && value;
   const validValue = dateFormatter(value).format('DD.MM.YYYY HH:mm:ss');
   const dateTime = isValid ? validValue : '—';
   return dateTime;
};
const prettyCardNumber = (value = '', options) => {
   const mask = typeof options?.mask === 'boolean' ? options?.mask : true;
   const isValid = ['string', 'number'].includes(typeof value) && value;
   const parsedValue = String(value).replace(/\D/g, '');
   const first = parsedValue.slice(0, 4);
   const second =
      parsedValue.slice(4, 6) + mask ? parsedValue.slice(6, 8) : '**';
   const third = mask ? parsedValue.slice(8, 12) : '****';
   const fourth = parsedValue.slice(12, 16);
   const validValue = `${first} ${second} ${third} ${fourth}`;
   const cardNumber = isValid ? validValue : '—';
   return cardNumber;
};
const prettyCardValid = (value = '') => {
   const isValid = typeof value === 'string' && value;
   const parsedValue = String(value || '')
      .replace('/', '')
      .replace('-', '');
   const validValue = parsedValue.slice(0, 2) + '/' + parsedValue.slice(2, 4);
   const cardValid = isValid ? validValue : '—';
   return cardValid;
};
const prettyTinNumber = (value = '') => {
   const isValid = typeof value === 'string' && value;
   const parsedValue = String(value || '');
   const first = parsedValue.slice(0, 3);
   const second = parsedValue.slice(3, 6);
   const third = parsedValue.slice(6, 9);
   const validValue = `${first} (${second}) ${third}`;
   const tinNumber = isValid ? validValue : '—';
   return tinNumber;
};
const prettyPassportNumber = (value = '') => {
   const isValid = typeof value === 'string' && value;
   const validValue = `${value.slice(0, 2)} - ${value.slice(2, 9)}`;
   const passportNumber = isValid ? validValue : '—';
   return passportNumber;
};
const prettyPhoneNumber = (value = '') => {
   const isValid = typeof value === 'string' && value;
   const parsedValue = String(value || '');
   const countryCode = parsedValue.slice(0, 4);
   const code = parsedValue.slice(4, 6);
   const first = parsedValue.slice(6, 9);
   const second = parsedValue.slice(9, 11);
   const third = parsedValue.slice(11, 13);
   const validValue = `${countryCode} (${code}) ${first} ${second} ${third}`;
   const phoneNumber = isValid ? validValue : '—';
   return phoneNumber;
};
const prettyNumber = (value, options) => {
   const scale = typeof options?.scale === 'number' ? options?.scale : 2;
   const split = typeof options?.split === 'boolean' ? options?.split : true;
   const isValid =
      (typeof value === 'string' && value) || typeof value === 'number';
   if (isValid) {
      try {
         const splittedValue = Big(value).toFixed(scale).split('.');
         const int = splittedValue?.[0];
         const float = splittedValue?.[1];
         const number =
            (split ? int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : int) +
            (float ? '.' + float : '');
         return number;
      } catch {
         return '—';
      }
   } else {
      return '—';
   }
};
const prettyFileSize = (value, options) => {
   const isValid = typeof value === 'number';
   if (isValid) {
      const si = typeof options?.si === 'boolean' ? options?.si : false;
      const dp = typeof options?.dp === 'number' ? options?.dp : 1;
      const thresh = si ? 1000 : 1024;
      if (Math.abs(value) < thresh) {
         return value + ' B';
      }
      const units = si
         ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
         : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
      let u = -1;
      const r = 10 ** dp;
      do {
         value /= thresh;
         ++u;
      } while (
         Math.round(Math.abs(value) * r) / r >= thresh &&
         u < units.length - 1
      );
      const fileSize = value.toFixed(dp) + ' ' + units[u];
      return fileSize;
   } else {
      return '—';
   }
};
const prettyNumberValue = (value = '') => {
   const numberValue = typeof value === 'number' ? value : '—';
   return numberValue;
};
const prettyString = (value = '') => {
   const isValid = typeof value === 'string' && value;
   const stringValue = isValid ? value : '—';
   return stringValue;
};
