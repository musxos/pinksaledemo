export default function currencyFormat(value: any) {
 return new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
 }).format(value);
}
