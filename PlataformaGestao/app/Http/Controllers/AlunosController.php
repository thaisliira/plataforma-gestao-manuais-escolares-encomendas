<?php

namespace App\Http\Controllers;

use App\Models\Aluno;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class AlunosController extends Controller
{
    public function create()
    {
        return Inertia::render('Alunos/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nome' => ['required', 'string', 'max:255'],
            'nif' => ['nullable', 'string', 'max:30'],
            'id_mega' => ['nullable', 'string', 'max:50'],
            'telefone' => ['nullable', 'string', 'max:50'],
            'email' => ['nullable', 'email', 'max:255'],
            'numero_cliente' => ['nullable', 'string', 'max:50'],
        ]);

        Aluno::create($data);

        return redirect()
            ->route('alunos.create')
            ->with('success', 'Aluno criado com sucesso.');
    }
}