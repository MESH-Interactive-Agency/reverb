const val = {
  PosNum(num) {
    if (num < 0) return 0;
    else return num.replace(/[^0-9.]/g, '');
  },

  TextNoSpec(txt) {
    if (txt < 0) return 0;
    else return txt.replace(/[^a-zA-Z0-9 ]/g, '');
  },

  TextNoSpecNoNum(txt) {
    if (txt < 0) return 0;
    else return txt.replace(/[^a-zA-Z ]/g, '');
  },
};

export default val;
