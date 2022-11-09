const sequelize = require('../database');
const sys_comp_01_compras=require('./sys_comp_01_compras.js');
const sys_comp_02_detalle_compra=require('./sys_comp_02_detalle_compra.js');
const sys_comp_03_estado_compra=require('./sys_comp_03_estado_compra.js');
const sys_empl_01_tipo_documento=require('./sys_empl_01_tipo_documento.js');
const sys_empl_02_sexo=require('./sys_empl_02_sexo.js');
const sys_empl_03_empleado=require('./sys_empl_03_empleado.js');
const sys_empr_01_empresa=require('./sys_empr_01_empresa.js');
const sys_info_01_monedas=require('./sys_info_01_monedas.js');
const sys_info_02_historial_monedas=require('./sys_info_02_historial_monedas.js');
const sys_prod_01_products=require('./sys_prod_01_products.js');
const sys_prod_02_categoria=require('./sys_prod_02_categoria.js');
const sys_prod_03_stock=require('./sys_prod_03_stock.js');
const sys_prod_04_historial_stock=require('./sys_prod_04_historial_stock.js');
const sys_prod_05_tipo_modificacion=require('./sys_prod_05_tipo_modificacion.js');
const sys_prod_06_producto_categoria=require('./sys_prod_06_producto_categoria.js');
const sys_prod_07_producto_proveedor=require('./sys_prod_07_producto_proveedor.js');
const sys_prod_08_precio_productos=require('./sys_prod_08_precio_productos.js');
const sys_prod_09_historial_precio=require('./sys_prod_09_historial_precio.js');
const sys_prov_01_proveedor=require('./sys_prov_01_proveedor.js');
const sys_targ_01_tarjeta=require('./sys_targ_01_tarjeta.js');
const sys_targ_02_cuotas=require('./sys_targ_02_cuotas.js');
const sys_targ_03_config_empresa=require('./sys_targ_03_config_empresa.js');
const sys_user_01_tipo_usuario=require('./sys_user_01_tipo_usuario.js');
const sys_user_02_usuarios=require('./sys_user_02_usuarios.js');
const sys_user_03_modulos=require('./sys_user_03_modulos.js');
const sys_user_04_det_usuario_modulos=require('./sys_user_04_det_usuario_modulos.js');
const sys_vent_01_estado_venta=require('./sys_vent_01_estado_venta.js');
const sys_vent_02_venta=require('./sys_vent_02_venta.js');
const sys_vent_03_detalle_ventas=require('./sys_vent_03_detalle_ventas.js');
sequelize.sync({ alter: true });
