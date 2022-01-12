import * as React from 'react';

function Bio() {
    return (
        <section className="bio">
            <div className="container">
                <h3 className="font-weight-bold pt-2 text-center text-uppercase my-5">
                    Bio
                </h3>
                <div className="row">
                    <div className="col-md-6 p-5">
                        <h5 className="ml-3 mt-3">Quienes somos </h5>
                        <p className="font-italic mb-5 p-3">
                            Nosotros somos una banda independiente que auto
                            financia su producción musical, tu aporte nos ayuda
                            de forma importante para seguir compartiendo nuestra
                            música. Lo puedes hacer de una forma muy sencilla a
                            través de las siguientes plataformas. Por cierto,
                            todos los métodos de pago son completamente seguros.
                            Nosotros no tenemos información de sus tarjetas.{' '}
                        </p>
                        <a className="btn btn-primary" href="#" role="button">
                            Leer más
                        </a>
                    </div>
                    <div className="bio__background-image col-md-6"></div>
                </div>
                <div className="bio__photo-strip row">
                    <div className="col-3">
                        <img
                            className="w-100 img-thumbnail"
                            src="assets/img/THE-BRUCES-A-MI-MEDELLIN-15.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-3">
                        <img
                            className="w-100 img-thumbnail"
                            src="assets/img/THE-BRUCES-A-MI-MEDELLIN-4.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-3">
                        <img
                            className="w-100 img-thumbnail"
                            src="assets/img/THE-BRUCES-A-MI-MEDELLIN-18.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-3">
                        <img
                            className="w-100 img-thumbnail"
                            src="assets/img/THE-BRUCES-A-MI-MEDELLIN-35.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Bio;
