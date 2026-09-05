# Zona Clara

Sitio de una página para vender siete rutas de coaching independiente de Fortnite. La identidad usa un atlas plegable de tormenta, rutas de caída e inventario de decisiones; no utiliza arte oficial, personajes, capturas, logotipos ni interfaz propietaria del juego.

## Ejecutar en local

Requiere Node.js y npm instalados directamente en el sistema operativo.

```bash
npm install
npm run dev
```

Para verificar una entrega:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

El proyecto usa Next.js 16.3.4 en lugar de la versión 14.2 indicada en la plantilla. Se mantuvieron App Router, React 18, TypeScript estricto y Tailwind 3; el cambio evita publicar sobre una rama antigua con vulnerabilidades conocidas.

## Variables de Wompi

`.env.local` y `.env.example` tienen únicamente cuatro campos vacíos. Las cuatro llaves se obtienen en el panel de Wompi y deben pertenecer al mismo ambiente:

- `NEXT_PUBLIC_WOMPI_PUBLIC_KEY`: tokeniza la tarjeta desde el navegador.
- `WOMPI_PRIVATE_KEY`: crea y consulta transacciones desde el servidor.
- `WOMPI_INTEGRITY_SECRET`: firma referencia, monto y moneda.
- `WOMPI_EVENTS_SECRET`: verifica la firma del webhook.

Las tarjetas reales requieren las cuatro llaves de producción. Con llaves de prueba solo funcionan tarjetas de sandbox. Si se usa una tarjeta real con esas llaves, Wompi puede devolver estado `ERROR` con el mensaje “La tarjeta usada no es admitida para el ambiente Sandbox”; es un fallo de procesamiento por ambiente, no un rechazo bancario ni un error visual del sitio.

Después de pegar las cuatro llaves en `.env.local`, detén y vuelve a iniciar `npm run dev`; no hay que modificar código. En un hosting, guarda las cuatro variables y despliega de nuevo porque la llave pública se incorpora al bundle durante el build. El correo público de soporte vive en `lib/contacto.ts`, no en el entorno.

## Flujo de pago

1. El comprador abre una ruta y escribe exactamente correo, nombre del titular, número, vencimiento y CVC/CVV; además acepta los contratos de Wompi.
2. El navegador solicita al servidor los enlaces vigentes de aceptación. Los tokens de aceptación se vuelven a obtener en el servidor justo antes de cobrar.
3. El navegador cifra y tokeniza la tarjeta directamente contra Wompi. El número y el CVC no llegan a este servidor ni se escriben en logs.
4. `/api/wompi/pay` recibe el token y la referencia. El servidor identifica el plan desde la derecha, recupera el precio del catálogo, lo pasa a centavos y calcula la firma de integridad.
5. Si la transacción queda `PENDING`, la interfaz consulta su estado cada 2,5 segundos durante un máximo de cinco minutos. Agotar ese tiempo no se presenta como fallo.
6. El webhook firmado es la única fuente de verdad. Solo una transacción `APPROVED` con prefijo `zcl` produce la línea `[VENTA PAGADA]` en el log.
7. La pantalla aprobada funciona como recibo: muestra correo, referencia, ID de transacción, total, soporte y un botón para copiar la referencia. No se envía correo automático.

La URL de eventos de un comercio Wompi es única. Si varios sitios comparten el mismo comercio, solo uno recibe el aviso y cada webhook ignora referencias con otro prefijo. Para operación real, se recomienda un comercio por proyecto.

### Estados y mensajes de rechazo

`DECLINED` significa que alguna capa de la ruta de pago —Wompi, procesador o banco— rechazó la transacción. `ERROR` significa que hubo un fallo de procesamiento; una tarjeta real enviada al ambiente sandbox es el ejemplo más claro. La interfaz conserva el `status_message` completo y también muestra todos los mensajes de validación anidados que devuelve Wompi.

`WS05` se muestra como “Pago rechazado por seguridad”. Wompi no publica la regla concreta que lo origina: el código no prueba por sí solo fondos insuficientes ni fraude. Se conserva el mensaje crudo, se permite corregir los datos o probar una sola vez con otra tarjeta y, si continúa, se muestra la referencia y el correo de soporte.

## Diseño y contenido

- Marca asumida: Zona Clara; referencia `zcl`; soporte `contacto@zonaclara.co`.
- Paleta: nube, azul tormenta, cielo, naranja de alerta, escudo y grafito.
- Tipografías: Bowlby One SC para titulares y datos; Public Sans para lectura.
- Pieza firma: atlas plegable con cuatro círculos seguros y una ruta de rotación.
- Separador: barra de cinco ranuras —caída, recursos, tormenta, pelea y cierre—.
- Tabla útil: señales, decisión y error habitual por fase de tormenta.
- No se usa prueba social, descuentos, urgencia, resultados garantizados ni información inventada sobre un instructor.

La nomenclatura competitiva es una referencia fechada en septiembre de 2026. Epic puede cambiar rangos, modos y reglas, por lo que deben revisarse de nuevo antes de publicar y de competir.

## Configuración antes de vender

- Reemplazar `contacto@zonaclara.co`, el dominio canónico y los datos de marca por los reales.
- Cargar las cuatro llaves de producción en el panel del hosting; nunca subir `.env.local`.
- Registrar la URL pública `/api/wompi/webhook` en el panel del comercio y probar aprobación, `PENDING`, rechazos, `ERROR`, WS05 y reintentos con transacciones autorizadas para pruebas.
- Grabar y revisar el contenido ofrecido en cada ruta. Hoy el contenido no existe dentro del repositorio.
- Definir el procedimiento manual: revisar el panel de Wompi y contactar personalmente al comprador para coordinar entrega o acceso.
- Reemplazar el `Set` en memoria del webhook por almacenamiento persistente si habrá varias instancias. El `Set` no garantiza idempotencia distribuida y se pierde al reiniciar; los logs también pueden desaparecer.
- Publicar política de tratamiento de datos, términos del servicio y canales de atención propios.
- Pedir a un abogado colombiano que revise el derecho de retracto y la reversión de pago de la Ley 1480 para contenido digital, y la política de datos conforme a la Ley 1581.
- Confirmar autorización de padre, madre o tutor para compradores menores de edad.
- Revisar las reglas de torneos aplicables. El servicio no ofrece acceso a cuentas, boosting, colusión, exploits, macros, scripts, mods ni cheats.

## Alcance deliberado

No hay base de datos, login, carrito, panel administrativo, correo transaccional, membresías ni entrega automática. El vendedor se entera por el panel de Wompi y el log firmado, y coordina manualmente por correo. Fortnite y Epic Games pertenecen a sus titulares; este servicio es independiente, no oficial y no está patrocinado ni respaldado por Epic Games.
