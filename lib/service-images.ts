/** صور Pexels موثوقة — تُستخدم عند تعطل روابط Unsplash */
export function pexels(id: number, width = 800) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&fit=crop`;
}
