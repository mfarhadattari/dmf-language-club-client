import useAuthContext from "./useAuthContext";
import useSecureAxios from "./useSecureAxios";
import { useQuery } from "@tanstack/react-query";

const useOrders = () => {
  const { authUser } = useAuthContext();
  const { secureAxios } = useSecureAxios();

  const { data: orders = [], isLoading: ordersLoading } = useQuery({
    queryKey: [authUser, secureAxios],
    queryFn: async () => {
      const res = await secureAxios.get(
        `/student/my-enrolled?email=${authUser?.email}`
      );
      return res.data;
    },
  });

  return { orders, ordersLoading };
};

export default useOrders;
