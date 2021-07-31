import mock from '@/utils/axiosMock';

type User = {
  name: string;
  address: string;
  phone: string;
};

mock.onGet('/user').reply(() => {
  const userObject: User = {
    name: 'Trong',
    address: 'Bangkok',
    phone: '0944645351',
  };
  return [200, userObject];
});
