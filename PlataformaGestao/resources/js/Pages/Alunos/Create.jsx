import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { FaUserPlus, FaSave } from "react-icons/fa";

import ResultPopup from "@/Components/ResultPopup";

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-sm font-black text-gray-900 mb-2">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}

export default function Create({ auth }) {
  const { flash } = usePage().props;

  const form = useForm({
    nome: "",
    nif: "",
    id_mega: "",
    telefone: "",
    email: "",
    numero_cliente: "",
  });

  const [showSuccess, setShowSuccess] = React.useState(false);

  React.useEffect(() => {
    if (flash?.success) {
      setShowSuccess(true);
      const t = setTimeout(() => setShowSuccess(false), 2200);
      return () => clearTimeout(t);
    }
  }, [flash?.success]);

  const submit = (e) => {
    e.preventDefault();
    form.post(route("alunos.store"), {
      preserveScroll: true,
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Criar Aluno" />

      {/* Popup sucesso */}
      <ResultPopup
        open={showSuccess}
        type="success"
        message={flash?.success || "Guardado com sucesso."}
        onClose={() => setShowSuccess(false)}
      />

      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-black text-gray-900 flex items-center gap-2">
            <FaUserPlus /> Criar Aluno
          </h1>
          <p className="text-sm text-gray-500">
            Adiciona um novo aluno ao sistema.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-black text-gray-900">Dados do Aluno</h2>
            <p className="text-sm text-gray-500">Campos com * são obrigatórios.</p>
          </div>

          <form onSubmit={submit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Nome" required error={form.errors.nome}>
                <input
                  value={form.data.nome}
                  onChange={(e) => form.setData("nome", e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-black"
                  placeholder="Ex: João Silva"
                />
              </Field>

              <Field label="NIF" error={form.errors.nif}>
                <input
                  value={form.data.nif}
                  onChange={(e) => form.setData("nif", e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-black"
                  placeholder="Ex: 123456789"
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="ID MEGA" error={form.errors.id_mega}>
                <input
                  value={form.data.id_mega}
                  onChange={(e) => form.setData("id_mega", e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-black"
                  placeholder="Ex: MEGA-0001"
                />
              </Field>

              <Field label="Número de Cliente" error={form.errors.numero_cliente}>
                <input
                  value={form.data.numero_cliente}
                  onChange={(e) => form.setData("numero_cliente", e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-black"
                  placeholder="Ex: C-10293"
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Telefone" error={form.errors.telefone}>
                <input
                  value={form.data.telefone}
                  onChange={(e) => form.setData("telefone", e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-black"
                  placeholder="Ex: 912 345 678"
                />
              </Field>

              <Field label="Email" error={form.errors.email}>
                <input
                  type="email"
                  value={form.data.email}
                  onChange={(e) => form.setData("email", e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-black"
                  placeholder="Ex: aluno@email.com"
                />
              </Field>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="submit"
                disabled={form.processing}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black hover:bg-gray-800 text-white font-black disabled:opacity-60"
              >
                <FaSave />
                Guardar Aluno
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}