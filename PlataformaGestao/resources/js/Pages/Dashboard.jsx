import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    
    // --- DADOS FICTÍCIOS (MOCK DATA) ---
    // Futuramente isto virá da base de dados via Controller
    const stats = [
        { label: 'Pronto pra levantar', value: '24' },
        { label: 'Faltam Livros', value: '8' },
        { label: 'Aguarda Encapamento', value: '12' },
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            {/* Container Principal com espaçamento */}
            <div className="space-y-6">

                {/* 3. AÇÕES RÁPIDAS (Fundo) */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Ações Rápidas</h3>
                    <p className="text-sm text-gray-500 mb-6">Tarefas mais comuns</p>
                    
                    <div className="flex flex-wrap gap-4">
                        {/* Botão Preto */}
                        <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                            Nova Encomenda
                        </button>

                        {/* Botão Branco */}
                        <button className="flex items-center bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                            Consultar Encomendas
                        </button>

                        {/* Botão Branco */}
                        <button className="flex items-center bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            Ver Relatórios
                        </button>
                    </div>
                </div>

                {/* 1. ESTATÍSTICAS DE TOPO (3 Cartões) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-32">
                            <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
                            <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* 2. CARTÕES DE FUNCIONALIDADES (Listas, Encomendas, Histórico) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Cartão: Listas de Manuais */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
                            {/* Ícone Livro */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 4.168 6.253v13C4.168 19.977 5.754 19.5 7.5 19.5S10.832 19.977 12 20.253m0-14C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 3.332 1.253v13C19.832 19.977 18.247 19.5 16.5 19.5c-1.747 0-3.332.477-3.332 1.253" /></svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Listas de Manuais</h3>
                        <p className="text-sm text-gray-500 mb-6 flex-grow">Gerir listas por escola e ano</p>
                        <Link href="#" className="w-full block text-center border border-gray-200 rounded-lg py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                            Aceder
                        </Link>
                    </div>

                    {/* Cartão: Encomendas */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
                        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white mb-4">
                            {/* Ícone Caixa */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Encomendas</h3>
                        <p className="text-sm text-gray-500 mb-6 flex-grow">Criar e gerir encomendas</p>
                        <Link href="#" className="w-full block text-center border border-gray-200 rounded-lg py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                            Aceder
                        </Link>
                    </div>

                    {/* Cartão: Histórico */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
                        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                            {/* Ícone Relógio */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Histórico</h3>
                        <p className="text-sm text-gray-500 mb-6 flex-grow">Ver histórico de listas e encomendas</p>
                        <Link href="#" className="w-full block text-center border border-gray-200 rounded-lg py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                            Aceder
                        </Link>
                    </div>

                </div>

            </div>
        </AuthenticatedLayout>
    );
}