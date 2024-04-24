export default function guardrail(mathFunction) {
  const cast = [];

  try {
    cast.push(mathFunction());
  } catch (err) {
    cast.push(String(err));
  } finally {
    cast.push('Guardrail was processed');
  }

  return cast;
}
