import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FaPlus } from "react-icons/fa";
import StatCard from "@/Components/Orders/Clientes/StatCard";
import OrderCard from "@/Components/Orders/Clientes/OrderCard";

export default function OrdersIndex({ auth, orders, stats }) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Encomendas - Clientes" />

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Encomendas dos Clientes
            </h1>
            <p className="text-gray-500 text-sm">
              Gerir e processar encomendas de manuais
            </p>
          </div>
          <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition">
            <FaPlus className="mr-2" />
            Nova Encomenda
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Pendentes" value={stats.pendentes} color="text-yellow-600" />
          <StatCard
            label="Em Processamento"
            value={stats.processamento}
            color="text-blue-600"
          />
          <StatCard
            label="Concluídas"
            value={stats.concluidas}
            color="text-green-600"
          />
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
