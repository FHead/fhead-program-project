var ParticleName = new Object();

function CreateParticleNames()
{
   ParticleName.length = 0;

   ParticleName['0'] = 'void';
   ParticleName['1'] = 'd';
   ParticleName['2'] = 'u';
   ParticleName['3'] = 's';
   ParticleName['4'] = 'c';
   ParticleName['5'] = 'b';
   ParticleName['6'] = 't';
   ParticleName['7'] = 'b'';
   ParticleName['8'] = 't'';
   ParticleName['11'] = 'e-';
   ParticleName['12'] = 'nu_e';
   ParticleName['13'] = 'mu-';
   ParticleName['14'] = 'nu_mu';
   ParticleName['15'] = 'tau-';
   ParticleName['16'] = 'nu_tau';
   ParticleName['17'] = 'tau'-';
   ParticleName['18'] = 'nu'_tau';
   ParticleName['21'] = 'g';
   ParticleName['22'] = 'gamma';
   ParticleName['23'] = 'Z0';
   ParticleName['24'] = 'W+';
   ParticleName['25'] = 'h0(H_1)';
   ParticleName['32'] = 'Z'0';
   ParticleName['33'] = 'Z''0';
   ParticleName['34'] = 'W'+';
   ParticleName['35'] = 'H0(H_2)';
   ParticleName['36'] = 'A0(H_3)';
   ParticleName['37'] = 'H+';
   ParticleName['39'] = 'Graviton';
   ParticleName['40'] = 'BlackHole';
   ParticleName['41'] = 'R0';
   ParticleName['42'] = 'LQ_ue';
   ParticleName['81'] = 'specflav';
   ParticleName['82'] = 'rndmflavq';
   ParticleName['83'] = 'rndmflavg';
   ParticleName['90'] = 'system';
   ParticleName['110'] = 'Reggeon';
   ParticleName['111'] = 'pi0';
   ParticleName['113'] = 'rho0';
   ParticleName['115'] = 'a_20';
   ParticleName['130'] = 'K_L0';
   ParticleName['211'] = 'pi+';
   ParticleName['213'] = 'rho+';
   ParticleName['215'] = 'a_2+';
   ParticleName['221'] = 'eta';
   ParticleName['223'] = 'omega';
   ParticleName['225'] = 'f_2';
   ParticleName['310'] = 'K_S0';
   ParticleName['311'] = 'K0';
   ParticleName['313'] = 'K*0';
   ParticleName['315'] = 'K*_2(1430)0';
   ParticleName['321'] = 'K+';
   ParticleName['323'] = 'K*+';
   ParticleName['325'] = 'K*_2(1430)+';
   ParticleName['331'] = 'eta'';
   ParticleName['333'] = 'phi';
   ParticleName['335'] = 'f'_2(1525)';
   ParticleName['411'] = 'D+';
   ParticleName['413'] = 'D*+';
   ParticleName['415'] = 'D*_2(2460)+';
   ParticleName['421'] = 'D0';
   ParticleName['423'] = 'D*0';
   ParticleName['425'] = 'D*_2(2460)0';
   ParticleName['431'] = 'D_s+';
   ParticleName['433'] = 'D*_s+';
   ParticleName['435'] = 'D*_2s(2573)+';
   ParticleName['441'] = 'eta_c';
   ParticleName['443'] = 'J/psi';
   ParticleName['445'] = 'chi_2c';
   ParticleName['511'] = 'B0';
   ParticleName['513'] = 'B*0';
   ParticleName['515'] = 'B*_20';
   ParticleName['521'] = 'B+';
   ParticleName['523'] = 'B*+';
   ParticleName['525'] = 'B*_2+';
   ParticleName['531'] = 'B_s0';
   ParticleName['533'] = 'B*_s0';
   ParticleName['535'] = 'B*_2s0';
   ParticleName['541'] = 'B_c+';
   ParticleName['543'] = 'B*_c+';
   ParticleName['545'] = 'B*_2c+';
   ParticleName['551'] = 'eta_b';
   ParticleName['553'] = 'Upsilon';
   ParticleName['555'] = 'chi_2b';
   ParticleName['990'] = 'Pomeron';
   ParticleName['1103'] = 'dd_1';
   ParticleName['1114'] = 'Delta-';
   ParticleName['2101'] = 'ud_0';
   ParticleName['2103'] = 'ud_1';
   ParticleName['2112'] = 'n0';
   ParticleName['2114'] = 'Delta0';
   ParticleName['2203'] = 'uu_1';
   ParticleName['2212'] = 'p+';
   ParticleName['2214'] = 'Delta+';
   ParticleName['2224'] = 'Delta++';
   ParticleName['3101'] = 'sd_0';
   ParticleName['3103'] = 'sd_1';
   ParticleName['3112'] = 'Sigma-';
   ParticleName['3114'] = 'Sigma*-';
   ParticleName['3122'] = 'Lambda0';
   ParticleName['3124'] = 'Lambda(1520)0';
   ParticleName['3201'] = 'su_0';
   ParticleName['3203'] = 'su_1';
   ParticleName['3212'] = 'Sigma0';
   ParticleName['3214'] = 'Sigma*0';
   ParticleName['3222'] = 'Sigma+';
   ParticleName['3224'] = 'Sigma*+';
   ParticleName['3303'] = 'ss_1';
   ParticleName['3312'] = 'Xi-';
   ParticleName['3314'] = 'Xi*-';
   ParticleName['3322'] = 'Xi0';
   ParticleName['3324'] = 'Xi*0';
   ParticleName['3334'] = 'Omega-';
   ParticleName['4101'] = 'cd_0';
   ParticleName['4103'] = 'cd_1';
   ParticleName['4112'] = 'Sigma_c0';
   ParticleName['4114'] = 'Sigma*_c0';
   ParticleName['4122'] = 'Lambda_c+';
   ParticleName['4124'] = 'Lambda_c(2625)+';
   ParticleName['4132'] = 'Xi_c0';
   ParticleName['4201'] = 'cu_0';
   ParticleName['4203'] = 'cu_1';
   ParticleName['4212'] = 'Sigma_c+';
   ParticleName['4214'] = 'Sigma*_c+';
   ParticleName['4222'] = 'Sigma_c++';
   ParticleName['4224'] = 'Sigma*_c++';
   ParticleName['4232'] = 'Xi_c+';
   ParticleName['4301'] = 'cs_0';
   ParticleName['4303'] = 'cs_1';
   ParticleName['4312'] = 'Xi'_c0';
   ParticleName['4314'] = 'Xi*_c0';
   ParticleName['4322'] = 'Xi'_c+';
   ParticleName['4324'] = 'Xi*_c+';
   ParticleName['4332'] = 'Omega_c0';
   ParticleName['4334'] = 'Omega*_c0';
   ParticleName['4403'] = 'cc_1';
   ParticleName['4412'] = 'Xi_cc+';
   ParticleName['4414'] = 'Xi*_cc+';
   ParticleName['4422'] = 'Xi_cc++';
   ParticleName['4424'] = 'Xi*_cc++';
   ParticleName['4432'] = 'Omega_cc+';
   ParticleName['4434'] = 'Omega*_cc+';
   ParticleName['4444'] = 'Omega*_ccc++';
   ParticleName['5101'] = 'bd_0';
   ParticleName['5103'] = 'bd_1';
   ParticleName['5112'] = 'Sigma_b-';
   ParticleName['5114'] = 'Sigma*_b-';
   ParticleName['5122'] = 'Lambda_b0';
   ParticleName['5132'] = 'Xi_b-';
   ParticleName['5142'] = 'Xi_bc0';
   ParticleName['5201'] = 'bu_0';
   ParticleName['5203'] = 'bu_1';
   ParticleName['5212'] = 'Sigma_b0';
   ParticleName['5214'] = 'Sigma*_b0';
   ParticleName['5222'] = 'Sigma_b+';
   ParticleName['5224'] = 'Sigma*_b+';
   ParticleName['5232'] = 'Xi_b0';
   ParticleName['5242'] = 'Xi_bc+';
   ParticleName['5301'] = 'bs_0';
   ParticleName['5303'] = 'bs_1';
   ParticleName['5312'] = 'Xi'_b-';
   ParticleName['5314'] = 'Xi*_b-';
   ParticleName['5322'] = 'Xi'_b0';
   ParticleName['5324'] = 'Xi*_b0';
   ParticleName['5332'] = 'Omega_b-';
   ParticleName['5334'] = 'Omega*_b-';
   ParticleName['5342'] = 'Omega_bc0';
   ParticleName['5401'] = 'bc_0';
   ParticleName['5403'] = 'bc_1';
   ParticleName['5412'] = 'Xi'_bc0';
   ParticleName['5414'] = 'Xi*_bc0';
   ParticleName['5422'] = 'Xi'_bc+';
   ParticleName['5424'] = 'Xi*_bc+';
   ParticleName['5432'] = 'Omega'_bc0';
   ParticleName['5434'] = 'Omega*_bc0';
   ParticleName['5442'] = 'Omega_bcc+';
   ParticleName['5444'] = 'Omega*_bcc+';
   ParticleName['5503'] = 'bb_1';
   ParticleName['5512'] = 'Xi_bb-';
   ParticleName['5514'] = 'Xi*_bb-';
   ParticleName['5522'] = 'Xi_bb0';
   ParticleName['5524'] = 'Xi*_bb0';
   ParticleName['5532'] = 'Omega_bb-';
   ParticleName['5534'] = 'Omega*_bb-';
   ParticleName['5542'] = 'Omega_bbc0';
   ParticleName['5544'] = 'Omega*_bbc0';
   ParticleName['5554'] = 'Omega*_bbb-';
   ParticleName['10111'] = 'a_0(1450)0';
   ParticleName['10113'] = 'b_1(1235)0';
   ParticleName['10211'] = 'a_0(1450)+';
   ParticleName['10213'] = 'b_1(1235)+';
   ParticleName['10221'] = 'f_0(1370)';
   ParticleName['10223'] = 'h_1(1170)';
   ParticleName['10311'] = 'K*_0(1430)0';
   ParticleName['10313'] = 'K_1(1270)0';
   ParticleName['10321'] = 'K*_0(1430)+';
   ParticleName['10323'] = 'K_1(1270)+';
   ParticleName['10331'] = 'f_0(1710)';
   ParticleName['10333'] = 'h_1(1380)';
   ParticleName['10411'] = 'D*_0+';
   ParticleName['10413'] = 'D_1+';
   ParticleName['10421'] = 'D*_00';
   ParticleName['10423'] = 'D_10';
   ParticleName['10431'] = 'D*_0s+';
   ParticleName['10433'] = 'D_1s+';
   ParticleName['10441'] = 'chi_0c';
   ParticleName['10443'] = 'h_1c';
   ParticleName['10511'] = 'B*_00';
   ParticleName['10513'] = 'B_10';
   ParticleName['10521'] = 'B*_0+';
   ParticleName['10523'] = 'B_1+';
   ParticleName['10531'] = 'B*_0s0';
   ParticleName['10533'] = 'B_1s0';
   ParticleName['10541'] = 'B*_0c+';
   ParticleName['10543'] = 'B_1c+';
   ParticleName['10551'] = 'chi_0b';
   ParticleName['10553'] = 'h_1b';
   ParticleName['13122'] = 'Lambda(1405)0';
   ParticleName['14122'] = 'Lambda_c(2593)+';
   ParticleName['20113'] = 'a_1(1260)0';
   ParticleName['20213'] = 'a_1(1260)+';
   ParticleName['20223'] = 'f_1(1285)';
   ParticleName['20313'] = 'K_1(1400)0';
   ParticleName['20323'] = 'K_1(1400)+';
   ParticleName['20333'] = 'f_1(1420)';
   ParticleName['20413'] = 'D*_1+';
   ParticleName['20423'] = 'D*_10';
   ParticleName['20433'] = 'D*_1s+';
   ParticleName['20443'] = 'chi_1c';
   ParticleName['20513'] = 'B*_10';
   ParticleName['20523'] = 'B*_1+';
   ParticleName['20533'] = 'B*_1s0';
   ParticleName['20543'] = 'B*_1c+';
   ParticleName['20553'] = 'chi_1b';
   ParticleName['23122'] = 'Lambda(1600)0';
   ParticleName['30313'] = 'K*(1680)0';
   ParticleName['30323'] = 'K*(1680)+';
   ParticleName['30443'] = 'psi(3770)';
   ParticleName['33122'] = 'Lambda(1670)0';
   ParticleName['100113'] = 'rho(1450)0';
   ParticleName['100213'] = 'rho(1450)+';
   ParticleName['100441'] = 'eta_c(2S)';
   ParticleName['100443'] = 'psi(2S)';
   ParticleName['100553'] = 'Upsilon(2S)';
   ParticleName['1000001'] = '~d_L';
   ParticleName['1000002'] = '~u_L';
   ParticleName['1000003'] = '~s_L';
   ParticleName['1000004'] = '~c_L';
   ParticleName['1000005'] = '~b_1';
   ParticleName['1000006'] = '~t_1';
   ParticleName['1000011'] = '~e_L-';
   ParticleName['1000012'] = '~nu_eL';
   ParticleName['1000013'] = '~mu_L-';
   ParticleName['1000014'] = '~nu_muL';
   ParticleName['1000015'] = '~tau_1-';
   ParticleName['1000016'] = '~nu_tauL';
   ParticleName['1000021'] = '~g';
   ParticleName['1000022'] = '~chi_10';
   ParticleName['1000023'] = '~chi_20';
   ParticleName['1000024'] = '~chi_1+';
   ParticleName['1000025'] = '~chi_30';
   ParticleName['1000035'] = '~chi_40';
   ParticleName['1000037'] = '~chi_2+';
   ParticleName['1000039'] = '~Gravitino';
   ParticleName['1000045'] = '~chi_50';
   ParticleName['2000001'] = '~d_R';
   ParticleName['2000002'] = '~u_R';
   ParticleName['2000003'] = '~s_R';
   ParticleName['2000004'] = '~c_R';
   ParticleName['2000005'] = '~b_2';
   ParticleName['2000006'] = '~t_2';
   ParticleName['2000011'] = '~e_R-';
   ParticleName['2000012'] = '~nu_eR';
   ParticleName['2000013'] = '~mu_R-';
   ParticleName['2000014'] = '~nu_muR';
   ParticleName['2000015'] = '~tau_2-';
   ParticleName['2000016'] = '~nu_tauR';
   ParticleName['3000111'] = 'pi_tc0';
   ParticleName['3000113'] = 'rho_tc0';
   ParticleName['3000211'] = 'pi_tc+';
   ParticleName['3000213'] = 'rho_tc+';
   ParticleName['3000221'] = 'pi'_tc0';
   ParticleName['3000223'] = 'omega_tc';
   ParticleName['3000331'] = 'eta_tc0';
   ParticleName['3100021'] = 'V8_tc';
   ParticleName['3100111'] = 'pi_22_1_tc';
   ParticleName['3100113'] = 'rho_11_tc';
   ParticleName['3200111'] = 'pi_22_8_tc';
   ParticleName['3200113'] = 'rho_12_tc';
   ParticleName['3300113'] = 'rho_21_tc';
   ParticleName['3400113'] = 'rho_22_tc';
   ParticleName['4000001'] = 'd*';
   ParticleName['4000002'] = 'u*';
   ParticleName['4000003'] = 's*';
   ParticleName['4000004'] = 'c*';
   ParticleName['4000005'] = 'b*';
   ParticleName['4000006'] = 't*';
   ParticleName['4000011'] = 'e*-';
   ParticleName['4000012'] = 'nu*_e0';
   ParticleName['4000013'] = 'mu*-';
   ParticleName['4000014'] = 'nu*_mu0';
   ParticleName['4000015'] = 'tau*-';
   ParticleName['4000016'] = 'nu*_tau0';
   ParticleName['4900001'] = 'Dv';
   ParticleName['4900002'] = 'Uv';
   ParticleName['4900003'] = 'Sv';
   ParticleName['4900004'] = 'Cv';
   ParticleName['4900005'] = 'Bv';
   ParticleName['4900006'] = 'Tv';
   ParticleName['4900011'] = 'Ev';
   ParticleName['4900012'] = 'nuEv';
   ParticleName['4900013'] = 'MUv';
   ParticleName['4900014'] = 'nuMUv';
   ParticleName['4900015'] = 'TAUv';
   ParticleName['4900016'] = 'nuTAUv';
   ParticleName['4900021'] = 'gv';
   ParticleName['4900022'] = 'gammav';
   ParticleName['4900101'] = 'qv';
   ParticleName['5000023'] = 'Z_KK';
   ParticleName['5000039'] = 'Graviton';
   ParticleName['5100021'] = 'KKgluon*';
   ParticleName['5100039'] = 'Graviton*';
   ParticleName['9000111'] = 'a_0(980)0';
   ParticleName['9000211'] = 'a_0(980)+';
   ParticleName['9010221'] = 'f_0(980)';
   ParticleName['9900012'] = 'nu_Re';
   ParticleName['9900014'] = 'nu_Rmu';
   ParticleName['9900016'] = 'nu_Rtau';
   ParticleName['9900023'] = 'Z_R0';
   ParticleName['9900024'] = 'W_R+';
   ParticleName['9900041'] = 'H_L++';
   ParticleName['9900042'] = 'H_R++';
   ParticleName['9900110'] = 'rho_diff0';
   ParticleName['9900210'] = 'pi_diffr+';
   ParticleName['9900220'] = 'omega_di';
   ParticleName['9900330'] = 'phi_diff';
   ParticleName['9900440'] = 'J/psi_di';
   ParticleName['9900441'] = 'ccbar[1S0(8)]';
   ParticleName['9900443'] = 'ccbar[3S1(8)]';
   ParticleName['9900551'] = 'bbbar[1S0(8)]';
   ParticleName['9900553'] = 'bbbar[3S1(8)]';
   ParticleName['9902110'] = 'n_diffr0';
   ParticleName['9902210'] = 'p_diffr+';
   ParticleName['9910441'] = 'ccbar[3P0(8)]';
   ParticleName['9910551'] = 'bbbar[3P0(8)]';
   ParticleName['-1'] = 'dbar';
   ParticleName['-2'] = 'ubar';
   ParticleName['-3'] = 'sbar';
   ParticleName['-4'] = 'cbar';
   ParticleName['-5'] = 'bbar';
   ParticleName['-6'] = 'tbar';
   ParticleName['-7'] = 'b'bar';
   ParticleName['-8'] = 't'bar';
   ParticleName['-11'] = 'e+';
   ParticleName['-12'] = 'nu_ebar';
   ParticleName['-13'] = 'mu+';
   ParticleName['-14'] = 'nu_mubar';
   ParticleName['-15'] = 'tau+';
   ParticleName['-16'] = 'nu_taubar';
   ParticleName['-17'] = 'tau'+';
   ParticleName['-18'] = 'nu'_taubar';
   ParticleName['-24'] = 'W-';
   ParticleName['-34'] = 'W'-';
   ParticleName['-37'] = 'H-';
   ParticleName['-41'] = 'Rbar0';
   ParticleName['-42'] = 'LQ_uebar';
   ParticleName['-82'] = 'rndmflavqbar';
   ParticleName['-83'] = 'rndmflavgbar';
   ParticleName['-211'] = 'pi-';
   ParticleName['-213'] = 'rho-';
   ParticleName['-215'] = 'a_2-';
   ParticleName['-311'] = 'Kbar0';
   ParticleName['-313'] = 'K*bar0';
   ParticleName['-315'] = 'K*_2(1430)bar0';
   ParticleName['-321'] = 'K-';
   ParticleName['-323'] = 'K*-';
   ParticleName['-325'] = 'K*_2(1430)-';
   ParticleName['-411'] = 'D-';
   ParticleName['-413'] = 'D*-';
   ParticleName['-415'] = 'D*_2(2460)-';
   ParticleName['-421'] = 'Dbar0';
   ParticleName['-423'] = 'D*bar0';
   ParticleName['-425'] = 'D*_2(2460)bar0';
   ParticleName['-431'] = 'D_s-';
   ParticleName['-433'] = 'D*_s-';
   ParticleName['-435'] = 'D*_2s(2573)-';
   ParticleName['-511'] = 'Bbar0';
   ParticleName['-513'] = 'B*bar0';
   ParticleName['-515'] = 'B*_2bar0';
   ParticleName['-521'] = 'B-';
   ParticleName['-523'] = 'B*-';
   ParticleName['-525'] = 'B*_2-';
   ParticleName['-531'] = 'B_sbar0';
   ParticleName['-533'] = 'B*_sbar0';
   ParticleName['-535'] = 'B*_2sbar0';
   ParticleName['-541'] = 'B_c-';
   ParticleName['-543'] = 'B*_c-';
   ParticleName['-545'] = 'B*_2c-';
   ParticleName['-1103'] = 'dd_1bar';
   ParticleName['-1114'] = 'Deltabar+';
   ParticleName['-2101'] = 'ud_0bar';
   ParticleName['-2103'] = 'ud_1bar';
   ParticleName['-2112'] = 'nbar0';
   ParticleName['-2114'] = 'Deltabar0';
   ParticleName['-2203'] = 'uu_1bar';
   ParticleName['-2212'] = 'pbar-';
   ParticleName['-2214'] = 'Deltabar-';
   ParticleName['-2224'] = 'Deltabar--';
   ParticleName['-3101'] = 'sd_0bar';
   ParticleName['-3103'] = 'sd_1bar';
   ParticleName['-3112'] = 'Sigmabar+';
   ParticleName['-3114'] = 'Sigma*bar+';
   ParticleName['-3122'] = 'Lambdabar0';
   ParticleName['-3124'] = 'Lambda(1520)bar0';
   ParticleName['-3201'] = 'su_0bar';
   ParticleName['-3203'] = 'su_1bar';
   ParticleName['-3212'] = 'Sigmabar0';
   ParticleName['-3214'] = 'Sigma*bar0';
   ParticleName['-3222'] = 'Sigmabar-';
   ParticleName['-3224'] = 'Sigma*bar-';
   ParticleName['-3303'] = 'ss_1bar';
   ParticleName['-3312'] = 'Xibar+';
   ParticleName['-3314'] = 'Xi*bar+';
   ParticleName['-3322'] = 'Xibar0';
   ParticleName['-3324'] = 'Xi*bar0';
   ParticleName['-3334'] = 'Omegabar+';
   ParticleName['-4101'] = 'cd_0bar';
   ParticleName['-4103'] = 'cd_1bar';
   ParticleName['-4112'] = 'Sigma_cbar0';
   ParticleName['-4114'] = 'Sigma*_cbar0';
   ParticleName['-4122'] = 'Lambda_cbar-';
   ParticleName['-4124'] = 'Lambda_c(2625)-';
   ParticleName['-4132'] = 'Xi_cbar0';
   ParticleName['-4201'] = 'cu_0bar';
   ParticleName['-4203'] = 'cu_1bar';
   ParticleName['-4212'] = 'Sigma_cbar-';
   ParticleName['-4214'] = 'Sigma*_cbar-';
   ParticleName['-4222'] = 'Sigma_cbar--';
   ParticleName['-4224'] = 'Sigma*_cbar--';
   ParticleName['-4232'] = 'Xi_cbar-';
   ParticleName['-4301'] = 'cs_0bar';
   ParticleName['-4303'] = 'cs_1bar';
   ParticleName['-4312'] = 'Xi'_cbar0';
   ParticleName['-4314'] = 'Xi*_cbar0';
   ParticleName['-4322'] = 'Xi'_cbar-';
   ParticleName['-4324'] = 'Xi*_cbar-';
   ParticleName['-4332'] = 'Omega_cbar0';
   ParticleName['-4334'] = 'Omega*_cbar0';
   ParticleName['-4403'] = 'cc_1bar';
   ParticleName['-4412'] = 'Xi_ccbar-';
   ParticleName['-4414'] = 'Xi*_ccbar-';
   ParticleName['-4422'] = 'Xi_ccbar--';
   ParticleName['-4424'] = 'Xi*_ccbar--';
   ParticleName['-4432'] = 'Omega_ccbar-';
   ParticleName['-4434'] = 'Omega*_ccbar-';
   ParticleName['-4444'] = 'Omega*_cccbar--';
   ParticleName['-5101'] = 'bd_0bar';
   ParticleName['-5103'] = 'bd_1bar';
   ParticleName['-5112'] = 'Sigma_bbar+';
   ParticleName['-5114'] = 'Sigma*_bbar+';
   ParticleName['-5122'] = 'Lambda_bbar0';
   ParticleName['-5132'] = 'Xi_bbar+';
   ParticleName['-5142'] = 'Xi_bcbar0';
   ParticleName['-5201'] = 'bu_0bar';
   ParticleName['-5203'] = 'bu_1bar';
   ParticleName['-5212'] = 'Sigma_bbar0';
   ParticleName['-5214'] = 'Sigma*_bbar0';
   ParticleName['-5222'] = 'Sigma_bbar-';
   ParticleName['-5224'] = 'Sigma*_bbar-';
   ParticleName['-5232'] = 'Xi_bbar0';
   ParticleName['-5242'] = 'Xi_bcbar-';
   ParticleName['-5301'] = 'bs_0bar';
   ParticleName['-5303'] = 'bs_1bar';
   ParticleName['-5312'] = 'Xi'_bbar+';
   ParticleName['-5314'] = 'Xi*_bbar+';
   ParticleName['-5322'] = 'Xi'_bbar0';
   ParticleName['-5324'] = 'Xi*_bbar0';
   ParticleName['-5332'] = 'Omega_bbar+';
   ParticleName['-5334'] = 'Omega*_bbar+';
   ParticleName['-5342'] = 'Omega_bcbar0';
   ParticleName['-5401'] = 'bc_0bar';
   ParticleName['-5403'] = 'bc_1bar';
   ParticleName['-5412'] = 'Xi'_bcbar0';
   ParticleName['-5414'] = 'Xi*_bcbar0';
   ParticleName['-5422'] = 'Xi'_bcbar-';
   ParticleName['-5424'] = 'Xi*_bcbar-';
   ParticleName['-5432'] = 'Omega'_bcbar0';
   ParticleName['-5434'] = 'Omega*_bcbar0';
   ParticleName['-5442'] = 'Omega_bccbar-';
   ParticleName['-5444'] = 'Omega*_bccbar-';
   ParticleName['-5503'] = 'bb_1bar';
   ParticleName['-5512'] = 'Xi_bbbar+';
   ParticleName['-5514'] = 'Xi*_bbbar+';
   ParticleName['-5522'] = 'Xi_bbbar0';
   ParticleName['-5524'] = 'Xi*_bbbar0';
   ParticleName['-5532'] = 'Omega_bbbar+';
   ParticleName['-5534'] = 'Omega*_bbbar+';
   ParticleName['-5542'] = 'Omega_bbcbar0';
   ParticleName['-5544'] = 'Omega*_bbcbar0';
   ParticleName['-5554'] = 'Omega*_bbbbar+';
   ParticleName['-10211'] = 'a_0(1450)-';
   ParticleName['-10213'] = 'b_1(1235)-';
   ParticleName['-10311'] = 'K*_0(1430)bar0';
   ParticleName['-10313'] = 'K_1(1270)bar0';
   ParticleName['-10321'] = 'K*_0(1430)-';
   ParticleName['-10323'] = 'K_1(1270)-';
   ParticleName['-10411'] = 'D*_0-';
   ParticleName['-10413'] = 'D_1-';
   ParticleName['-10421'] = 'D*_0bar0';
   ParticleName['-10423'] = 'D_1bar0';
   ParticleName['-10431'] = 'D*_0s-';
   ParticleName['-10433'] = 'D_1s-';
   ParticleName['-10511'] = 'B*_0bar0';
   ParticleName['-10513'] = 'B_1bar0';
   ParticleName['-10521'] = 'B*_0-';
   ParticleName['-10523'] = 'B_1-';
   ParticleName['-10531'] = 'B*_0sbar0';
   ParticleName['-10533'] = 'B_1sbar0';
   ParticleName['-10541'] = 'B*_0c-';
   ParticleName['-10543'] = 'B_1c-';
   ParticleName['-13122'] = 'Lambda(1405)bar0';
   ParticleName['-14122'] = 'Lambda_c(2593)-';
   ParticleName['-20213'] = 'a_1(1260)-';
   ParticleName['-20313'] = 'K_1(1400)bar0';
   ParticleName['-20323'] = 'K_1(1400)-';
   ParticleName['-20413'] = 'D*_1-';
   ParticleName['-20423'] = 'D*_1bar0';
   ParticleName['-20433'] = 'D*_1s-';
   ParticleName['-20513'] = 'B*_1bar0';
   ParticleName['-20523'] = 'B*_1-';
   ParticleName['-20533'] = 'B*_1sbar0';
   ParticleName['-20543'] = 'B*_1c-';
   ParticleName['-23122'] = 'Lambda(1600)bar0';
   ParticleName['-30313'] = 'K*(1680)bar0';
   ParticleName['-30323'] = 'K*(1680)-';
   ParticleName['-33122'] = 'Lambda(1670)bar0';
   ParticleName['-100213'] = 'rho(1450)-';
   ParticleName['-1000001'] = '~d_Lbar';
   ParticleName['-1000002'] = '~u_Lbar';
   ParticleName['-1000003'] = '~s_Lbar';
   ParticleName['-1000004'] = '~c_Lbar';
   ParticleName['-1000005'] = '~b_1bar';
   ParticleName['-1000006'] = '~t_1bar';
   ParticleName['-1000011'] = '~e_L+';
   ParticleName['-1000012'] = '~nu_eLbar';
   ParticleName['-1000013'] = '~mu_L+';
   ParticleName['-1000014'] = '~nu_muLbar';
   ParticleName['-1000015'] = '~tau_1+';
   ParticleName['-1000016'] = '~nu_tauLbar';
   ParticleName['-1000024'] = '~chi_1-';
   ParticleName['-1000037'] = '~chi_2-';
   ParticleName['-2000001'] = '~d_Rbar';
   ParticleName['-2000002'] = '~u_Rbar';
   ParticleName['-2000003'] = '~s_Rbar';
   ParticleName['-2000004'] = '~c_Rbar';
   ParticleName['-2000005'] = '~b_2bar';
   ParticleName['-2000006'] = '~t_2bar';
   ParticleName['-2000011'] = '~e_R+';
   ParticleName['-2000012'] = '~nu_eRbar';
   ParticleName['-2000013'] = '~mu_R+';
   ParticleName['-2000014'] = '~nu_muRbar';
   ParticleName['-2000015'] = '~tau_2+';
   ParticleName['-2000016'] = '~nu_tauRbar';
   ParticleName['-3000211'] = 'pi_tc-';
   ParticleName['-3000213'] = 'rho_tc-';
   ParticleName['-4000001'] = 'd*bar';
   ParticleName['-4000002'] = 'u*bar';
   ParticleName['-4000003'] = 's*bar';
   ParticleName['-4000004'] = 'c*bar';
   ParticleName['-4000005'] = 'b*bar';
   ParticleName['-4000006'] = 't*bar';
   ParticleName['-4000011'] = 'e*bar+';
   ParticleName['-4000012'] = 'nu*_ebar0';
   ParticleName['-4000013'] = 'mu*bar+';
   ParticleName['-4000014'] = 'nu*_mubar0';
   ParticleName['-4000015'] = 'tau*bar+';
   ParticleName['-4000016'] = 'nu*_taubar0';
   ParticleName['-4900001'] = 'Dvbar';
   ParticleName['-4900002'] = 'Uvbar';
   ParticleName['-4900003'] = 'Svbar';
   ParticleName['-4900004'] = 'Cvbar';
   ParticleName['-4900005'] = 'Bvbar';
   ParticleName['-4900006'] = 'Tvbar';
   ParticleName['-4900011'] = 'Evbar';
   ParticleName['-4900012'] = 'nuEvbar';
   ParticleName['-4900013'] = 'MUvbar';
   ParticleName['-4900014'] = 'nuMUvbar';
   ParticleName['-4900015'] = 'TAUvbar';
   ParticleName['-4900016'] = 'nuTAUvbar';
   ParticleName['-4900101'] = 'qvbar';
   ParticleName['-9000211'] = 'a_0(980)-';
   ParticleName['-9900024'] = 'W_R-';
   ParticleName['-9900041'] = 'H_L--';
   ParticleName['-9900042'] = 'H_R--';
   ParticleName['-9900210'] = 'pi_diffr-';
   ParticleName['-9902110'] = 'n_diffrbar0';
   ParticleName['-9902210'] = 'p_diffrbar-';
}
