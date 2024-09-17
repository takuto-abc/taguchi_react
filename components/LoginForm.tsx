// components/LoginForm.tsx

import { Formik, Form, Field } from 'formik';
import { Button, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import * as Yup from 'yup';

const LoginForm: React.FC = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('無効なメールアドレスです').required('必須項目です'),
    password: Yup.string().min(6, '6文字以上で入力してください').required('必須項目です'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // ログイン処理
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormControl isInvalid={!!errors.email && touched.email}>
            <FormLabel htmlFor="email">メールアドレス</FormLabel>
            <Field as={Input} id="email" name="email" type="email" />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password && touched.password} mt={4}>
            <FormLabel htmlFor="password">パスワード</FormLabel>
            <Field as={Input} id="password" name="password" type="password" />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>

          <Button mt={4} colorScheme="teal" type="submit">
            ログイン
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
