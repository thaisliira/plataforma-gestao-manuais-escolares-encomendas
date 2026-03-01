<?php

namespace App\Http\Controllers;

use App\Models\AnoLetivo;
use Illuminate\Http\Request;

class AnosLetivosController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'nome'        => ['required', 'string', 'max:20'],
            'data_inicio' => ['required', 'date'],
            'data_fim'    => ['required', 'date', 'after:data_inicio'],
        ]);

        AnoLetivo::create($data);

        return redirect()->back()->with('success', 'Ano letivo criado com sucesso.');
    }

    public function update(Request $request, AnoLetivo $anoLetivo)
    {
        $data = $request->validate([
            'nome'        => ['required', 'string', 'max:20'],
            'data_inicio' => ['required', 'date'],
            'data_fim'    => ['required', 'date', 'after:data_inicio'],
        ]);

        $anoLetivo->update($data);

        return redirect()->back()->with('success', 'Ano letivo atualizado com sucesso.');
    }

    public function destroy(AnoLetivo $anoLetivo)
    {
        $anoLetivo->delete();

        return redirect()->back()->with('success', 'Ano letivo removido com sucesso.');
    }
}
