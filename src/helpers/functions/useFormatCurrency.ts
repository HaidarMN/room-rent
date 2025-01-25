const useFormatCurrency = (value: number) => {
  const formatedValue = new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

  return formatedValue;
};

export default useFormatCurrency;
