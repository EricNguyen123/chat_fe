import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { useTranslation } from "react-i18next";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../../redux/auth/actions';
import Loading from '../../../components/Loading';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../../config';

const cx = classNames.bind(styles);

const Register = () => {
  const dispatch = useDispatch();
  const authSelector = useSelector(({ auth } : any) => auth);
  const { t } = useTranslation("auth");
  const navigate = useNavigate();
  const handleRedirectPage = (path: string) => {
    navigate(path);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t("errors.requiredName")),
    email: Yup.string().email(t("errors.invalidField")).required(t("errors.requiredEmail")),
    password: Yup.string()
      .min(8, t("errors.minLength"))
      .required(t("errors.requiredPassword")),
    confirmPassword: Yup.string()
      .min(8, t("errors.minLength"))
      .required(t("errors.requiredConfirmPassword"))
      .oneOf([Yup.ref('password')], t('errors.passwordMismatch')),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: validationSchema,
    onSubmit: (values) => {
     dispatch(signin({ data: values, handleRedirectPage }))
    },
  });

  return (
    <div className={cx('wrapper')}>
      <Loading isLoading={authSelector.loading}/>
      <form className={cx('form')} onSubmit={formik.handleSubmit}>
        <div className={cx('title-box')}>
          <p className={cx('title')}>{t("form.titleSignup")}</p>
        </div>
        <div className={cx('flex')}></div>
        <div className={cx('box-input')}>
          <label className={cx('label')} htmlFor="name">{t("form.name")}</label>
          <input
            className={cx('input')}
            id="name"
            name="name"
            type="text"
            placeholder={t("form.name")}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <div className={cx('error')}>{formik.errors.name}</div>
          )}
        </div>

        <div className={cx('box-input')}>
          <label className={cx('label')} htmlFor="email">{t("form.email")}</label>
          <input
            className={cx('input')}
            id="email"
            name="email"
            type="email"
            placeholder={t("form.email")}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <div className={cx('error')}>{formik.errors.email}</div>
          )}
        </div>

        <div className={cx('box-input')}>
          <label className={cx('label')} htmlFor="password">{t("form.password")}</label>
          <input
            className={cx('input')}
            id="password"
            name="password"
            type="password"
            placeholder={t("form.password")}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <div className={cx('error')}>{formik.errors.password}</div>
          )}
        </div>

        <div className={cx('box-input')}>
          <label className={cx('label')} htmlFor="confirmPassword">{t("form.confirmPassword")}</label>
          <input
            className={cx('input')}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder={t("form.confirmPassword")}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <div className={cx('error')}>{formik.errors.confirmPassword}</div>
          )}
        </div>

        <button className={cx('submit')} type="submit">{t("form.sub")}</button>
        <div className={cx('footer-box')}>
          <p className="signin">{t("form.msgLogin")} <Link className={cx('link')} to={config.routes.login}>{t("form.linkLogin")}</Link> </p>
        </div>
      </form>
    </div>
  );
};

export default Register;