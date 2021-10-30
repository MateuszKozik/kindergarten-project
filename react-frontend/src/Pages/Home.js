import React, { Component } from "react";

export class Home extends Component {
	render() {
		return (
			<>
				<div class="container mt-2">
					<div
						id="carouselExampleIndicators"
						class="carousel slide"
						data-bs-ride="carousel"
					>
						<div class="carousel-indicators">
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="0"
								class="active"
								aria-current="true"
								aria-label="Slide 1"
							></button>
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="1"
								aria-label="Slide 2"
							></button>
						</div>
						<div class="carousel-inner">
							<div class="carousel-item active">
								<img
									src="obr2.jpg"
									style={{ maxWidth: 1920, maxHeight: 576 }}
									class="d-block w-100"
									alt="Przedszkole"
								/>
							</div>
							<div class="carousel-item">
								<img
									src="obr1.jpg"
									style={{ maxWidth: 1920, maxHeight: 576 }}
									class="d-block w-100"
									alt="Przedszkole"
								/>
							</div>
						</div>
						<button
							class="carousel-control-prev"
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide="prev"
						>
							<span
								class="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button
							class="carousel-control-next"
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide="next"
						>
							<span
								class="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span class="visually-hidden">Next</span>
						</button>
					</div>
				</div>

				<section class="container mb-4 mt-4">
					<div>
						<div class="col-lg-12 mb-3">
							<h3 class="section-title">Aktualności</h3>
						</div>

						<div class="row">
							<div class="col-6 col-md-4 col-lg-3">
								<a
									class="d-flex flex-column article-content"
									href="#"
									title="Dzień Postaci z Bajek"
								>
									<img
										draggable="false"
										onmousedown="return false"
										src="obr3.jpg"
										alt="Kubuś Puchatek"
										style={{ maxWidth: "100%" }}
									/>
									<div class="article-title">Dzień Postaci z Bajek</div>
									<div class="article-date">21.10.2021</div>
									<div class="article-excerpt">
										W piątek, 5 listopada 2021 roku będziemy obchodzić
										Międzynarodowy Dzień Postaci z Bajek. Tego dnia dzieci
										przychodzą przebrane w bajkowe, baśniowe postacie. Bardzo
										prosimy, aby były to stroje z klasycznych bajek i bez
										gadżetów (różdżka, szabla, miecz itp.).
									</div>
								</a>
							</div>

							<div class="col-6 col-md-4 col-lg-3">
								<a
									class="d-flex flex-column article-content"
									href="#"
									title="Obchody Dnia Edukacji Narodowej 2021"
								>
									<img
										draggable="false"
										onmousedown="return false"
										src="obr4.jpg"
										alt="Obchody Dnia Edukacji Narodowej 2021"
										style={{ maxWidth: "100%" }}
									/>
									<div class="article-title">
										Obchody Dnia Edukacji Narodowej 2021
									</div>
									<div class="article-date">19.10.2021</div>
									<div class="article-excerpt">
										Tegoroczne obchody Dnia Edukacji Narodowej społeczność
										przedszkola celebrowała podczas dwóch uroczystości. W
										obiekcie przy ulicy Parkowej spotkanie rozpoczęło się o
										godzinie 9.00. W sali udekorowanej na tę okoliczność
										pięknymi kwiatami na przedszkolnej scenie występowały
										kolejno z piosenkami: Kangurki, Tygryski i Żabki.
									</div>
								</a>
							</div>

							<div class="col-6 col-md-4 col-lg-3">
								<a
									class="d-flex flex-column article-content"
									href="#"
									title="Próbny alarm pożarowy"
								>
									<img
										draggable="false"
										onmousedown="return false"
										src="obr5.jpg"
										alt="Próbny alarm pożarowy"
										style={{ maxWidth: "100%" }}
									/>
									<div class="article-title">Próbny alarm pożarowy</div>
									<div class="article-date">17.10.2021</div>
									<div class="article-excerpt">
										We wtorek 28 września 2021r. przeprowadzono próbny alarm
										pożarowy i ewakuację dzieci z budynku przedszkola. Taką
										akcję zawsze wcześniej poprzedzają rozmowy z dziećmi na ten
										temat. Przedszkolaki doskonale poradziły sobie podczas
										ewakuacji. Budynki przedszkola opuściły spokojnie, bez
										paniki, słuchały poleceń nauczycieli. Egzamin zdany na 5.
										Gratulujemy.
									</div>
								</a>
							</div>

							<div class="col-6 col-md-4 col-lg-3">
								<a
									class="d-flex flex-column article-content"
									href="#"
									title="Próbny alarm pożarowy"
								>
									<img
										draggable="false"
										onmousedown="return false"
										src="obr6.jpg"
										alt="Próbny alarm pożarowy"
										style={{ maxWidth: "100%" }}
									/>
									<div class="article-title">
										Powitanie Jesieni i Dzień Pieczonego Ziemniaka
									</div>
									<div class="article-date">22.09.2021</div>
									<div class="article-excerpt">
										Na dworze już prawdziwa jesień. Ubieramy się już cieplej niż
										latem. Jest więcej deszczowych dni, dlatego zaprzyjaźniliśmy
										się z kolorowymi kaloszami. Dzisiejszy dzień "kręcił się"
										też wokół ziemniaka…
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section class="container mb-5">
					<div class="col-lg-12 mb-3">
						<h3 class="section-title">Usługi</h3>
					</div>
					<div class="row">
						<div class="py-3 col-6 col-lg-6">
							<a
								href="/login"
								title="Logowanie"
								class="py-4 d-flex align-items-center justify-content-center block-item"
								style={{ backgroundColor: "#f4f4f4" }}
							>
								<div class="block-title d-flex align-items-center my-2 mx-1 text-center">
									Logowanie
								</div>
							</a>
						</div>

						<div class="py-3 col-6 col-lg-6">
							<a
								href="/register"
								title="Rejestracja"
								class="py-4 d-flex align-items-center justify-content-center block-item"
								style={{ backgroundColor: "#f4f4f4" }}
							>
								<div class="block-title d-flex align-items-center my-2 mx-1 text-center">
									Rejestracja
								</div>
							</a>
						</div>

						<div class="py-3 col-6 col-lg-3">
							<a
								href="#"
								title="Ogłoszenia"
								class="py-4 d-flex align-items-center justify-content-center block-item"
								style={{ backgroundColor: "#f4f4f4" }}
							>
								<div class="block-title d-flex align-items-center my-2 mx-1 text-center">
									Ogłoszenia
								</div>
							</a>
						</div>

						<div class="py-3 col-6 col-lg-3">
							<a
								href="#"
								title="Praca"
								class="py-4 d-flex align-items-center justify-content-center block-item"
								style={{ backgroundColor: "#f4f4f4" }}
							>
								<div class="block-title d-flex align-items-center my-2 mx-1 text-center">
									Praca
								</div>
							</a>
						</div>

						<div class="py-3 col-6 col-lg-3">
							<a
								href="#"
								title="Wydarzenia"
								class="py-4 d-flex align-items-center justify-content-center block-item"
								style={{ backgroundColor: "#f4f4f4" }}
							>
								<div class="block-title d-flex align-items-center my-2 mx-1 text-center">
									Wydarzenia
								</div>
							</a>
						</div>

						<div class="py-3 col-6 col-lg-3">
							<a
								href="#"
								title="Dokumenty"
								class="py-4 d-flex align-items-center justify-content-center block-item"
								style={{ backgroundColor: "#f4f4f4" }}
							>
								<div class="block-title d-flex align-items-center my-2 mx-1 text-center">
									Dokumenty
								</div>
							</a>
						</div>

						<div class="py-3 col-6 col-lg-6">
							<a
								href="#"
								title="Certyfikaty"
								class="py-4 d-flex align-items-center justify-content-center block-item"
								style={{ backgroundColor: "#f4f4f4" }}
							>
								<div class="block-title d-flex align-items-center my-2 mx-1 text-center">
									Certyfikaty
								</div>
							</a>
						</div>

						<div class="py-3 col-6 col-lg-6">
							<a
								href="#"
								title="Nasze sukcesy"
								class="py-4 d-flex align-items-center justify-content-center block-item"
								style={{ backgroundColor: "#f4f4f4" }}
							>
								<div class="block-title d-flex align-items-center my-2 mx-1 text-center">
									Nasze sukcesy
								</div>
							</a>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default Home;
