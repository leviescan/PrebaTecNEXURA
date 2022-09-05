<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rol;
use App\Models\Empleados;
use App\Models\Empleado_rol;

class EmpleadosController extends Controller
{

       /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Empleados::select("empleados.id","empleados.nombre", "empleados.email", "empleados.sexo", "areas.nombre as area_id", "empleados.boletin", "empleados.descripcion", "rols.nombre as rol_id")
        ->join("areas", "areas.id", "=", "empleados.area_id")
        ->join("empleado_rols", "empleado_rols.empleado_id", "=", "empleados.id")
        ->join("rols", "rols.id", "=", "empleado_rols.rol_id")
        ->orderBy("empleados.id", "ASC")
        ->get();
    }


     /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $empleado = Empleados::create($request->all());
            $empleado_rol = new Empleado_rol();
            $empleado_rol->empleado_id = $empleado->id;
            $empleado_rol->rol_id = $request->rol_id;
            $empleado_rol->save();
            return response()->json(['empleado creado exitosamente'], 201);

        }
        catch(Exception $e) {
            return ['no se pudo crear el empleado' => false,'error' => $e->getMessage()];
        }
    }

      /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $empleado = Empleados::findOrFail($request->id);
        $empleado->nombre = $request->nombre;
        $empleado->email = $request->email;
        $empleado->sexo = $request->sexo;
        $empleado->area_id = $request->area_id;
        $empleado->boletin = $request->boletin;
        $empleado->update();

        Empleado_rol::where('empleado_id', '=', $empleado->id)->update(['rol_id'=>$request->rol_id]);
        return response()->json(['message' => 'empleado actualizado con exito'], 201);

    }

    public function destroy(Request $request)
    {
        $empleado = Empleados::destroy($request->id);

        if(is_null($empleado)){
            return response()->json(['message' => 'empleado no encontrado'], 404);
        }
           return response()->json(['message' => 'empleado eliminado con exito'], 201);
    }

    public function read1(Request $request){

        return Empleados::select("empleados.id","empleados.nombre", "empleados.email", "empleados.sexo", "areas.nombre as area_id", "empleados.boletin", "empleados.descripcion", "rols.nombre as rol_id")
        ->join("areas", "areas.id", "=", "empleados.area_id")
        ->join("empleado_rols", "empleado_rols.empleado_id", "=", "empleados.id")
        ->join("rols", "rols.id", "=", "empleado_rols.rol_id")
        ->orderBy("empleados.id", "ASC")
        ->find($request->id);

    }

}
