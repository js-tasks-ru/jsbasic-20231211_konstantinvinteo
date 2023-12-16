function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice( maxlength - 1) + "…";
  } else {
    return str;
  }
}
