<?php

namespace App\Http\Controllers;

use App\Models\EncomendaAluno;
use App\Models\EncomendaEditora;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $aguardaLivros       = EncomendaAluno::where('status', 'AGUARDA_LIVROS')->count();
        $aguardaEnsacamento  = EncomendaAluno::where('status', 'AGUARDA_ENSACAMENTO')->count();
        $aguardaEncapamento  = EncomendaAluno::where('status', 'AGUARDA_ENCAPAMENTO')->count();
        $aguardaLevantamento = EncomendaAluno::where('status', 'AGUARDA_LEVANTAMENTO')->count();

        $paraEncomendar = EncomendaEditora::where('status', 'SOLICITADO')->count();
        $encomendadas   = EncomendaEditora::where('status', 'ENTREGA_PARCIAL')->count();

        return Inertia::render('Dashboard', [
            'stats' => [
                'aguardaLivros'       => $aguardaLivros,
                'aguardaEnsacamento'  => $aguardaEnsacamento,
                'aguardaEncapamento'  => $aguardaEncapamento,
                'aguardaLevantamento' => $aguardaLevantamento,
                'paraEncomendar'      => $paraEncomendar,
                'encomendadas'        => $encomendadas,
            ],
        ]);
    }
}
