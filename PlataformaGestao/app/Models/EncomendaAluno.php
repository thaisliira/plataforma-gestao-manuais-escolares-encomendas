<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EncomendaAluno extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'encomendas_aluno';

    protected $fillable = [
        'aluno_id',
        'nif',
        'id_mega',
        'nome',
        'telefone',
        'escola_id',
        'ano_letivo_id',
        'ano_escolar_id',
        'lista_id',
        'status',
        'observacao',
    ];

    public function aluno(): BelongsTo
    {
        return $this->belongsTo(Aluno::class);
    }

    public function escola(): BelongsTo
    {
        return $this->belongsTo(Escola::class);
    }

    public function anoLetivo(): BelongsTo
    {
        return $this->belongsTo(AnoLetivo::class);
    }

    public function anoEscolar(): BelongsTo
    {
        return $this->belongsTo(AnoEscolar::class);
    }

    public function lista(): BelongsTo
    {
        return $this->belongsTo(ListaLivro::class, 'lista_id');
    }

    public function itens(): HasMany
    {
        return $this->hasMany(EncomendaLivroAlunoItem::class);
    }
}
