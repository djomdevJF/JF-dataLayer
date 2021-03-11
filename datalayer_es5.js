"use strict";
/**
 * https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=MYGwhgzhAEBSBiATMAXMAZMBPApgJ2gG8AoY6aAegCoqzyroARHAMzAFcQVpRIIcYKAPbQUeMMADW0FkIIQADjmABLFiuDQcANxwA7FBAoqD-CShVC9EOtAYABFFiVEA8gCMAVspQBfW1QUdMBWEGLswMJ4ABQk5OQgQgDmSSZJ0AC8MmAg_AA0tjzgUAIAXESF5Dr6hpnQAOSeEAC0YhKSAKK6BvUF8fEqKDgAtjBZjS1tUgCSQ8O9lUUakmMNTa3iUgDCIMsL_eQAjuxgBoNYdRMb7QCKJ2dO9YW-dXEH1QYQ5VdTnd0o-wOgxGXzWk02klmI0B_VAy1BPwhOz2fQOx1OFic33WvzuGPOT36vheWUI_nIAEo3uQUAALFQQAB0vzSOz4rw-hjy0GBo25cKkEG56IeWF8AG5CnSGcyIWlGKgwHU9DgAO7QADqODAkgAsmAFNEKZL-tKmYgcO52OlSRLSIUKBQmK5ddAAMoodgsFiFRBCYDsYY1RlgRCILo1dAMoYqmL1RgurZWGModBCUM4RC9aBGzIAPgqB2gqpMftVjOQaEwuAIWRLejLFcV1fw0AAPm3oABtAC64soTq2tOU0jU0ErGGwrZyeG1iAuOAAHtGbEX643OQAVOV6G3F0tCctbnfpDvdvsD6BDkc8lhaf7b9ppaAzucL5dhGyLM2M_goZhWik-DRIkKRpMa370kyQjuPweC6AACngQiIBEhhGiaBw_u4pYRgYj5SGkGHPBB5D-HQFhBgAcoeubUtA2hgAQiDkFkKrqgqQxGqiRaILSdSIIySQ4CgAASQjsHgEBGgA1PUMIHIgwwCUJIm6iY7BDNJFJyQp_SIKsgnCSgbrKFYBmyfJkq-vxWR8YyCihh6TEoNEABM3L1AADPUpHxEpAnDA5TloHgrkeQ0Pl-eQBkCUyjmIM5YXuZ5UXWf0s6engeg5gABgAJIQfG-KUhVKSVZUQL4uV-eR5B_gB1rCTEQgKBYVgUoW8SOu6IkWLu0AQEIQYMQyJwgDweBetwsgEHSODjpaTX4KUhQgCJoh1D-lE4DRqrEVKUGMiw7B6MAGQFYQfjQIAKcTQLlmE0kdJgKJpGT1IAqdQNI9ohHRJKCvSg73QB99Q_T-Ca6joQOXddgDcBPd4NHZDegoTgF2ABBEiOkP0Y7RK17U5RkxPQKdFrqCqiCdZlkl6D9eNOEoQh3gTlhEyTABE7hCEI62nBznX0U9MoWoBjL6GA7jrSxWSs1YP3C-aS1gbuHR6JL0v421bPRdA5J6zji2Aakqvq1LmZ1FrhOdRkBb0Xjcvs1kZOsCYmaC4sNPZb9IvK-LZvSz9-vkAzzg4Mz0CO5knPc7z2p6ALXX9NQtBFnY0DTHe81G01z4MqItMW1Y3JZTlViR5JPDsGEw3QKBJvpCdZ2E6uRYOI54jKUQXaMzgPYvL3EddhaEDAHgKja1YPaLOn9hezlhA92H_dp92I9jxPhPT2ngSLAzR2i9a_saxbxNZOEOAe6vP58CoSR6B4njRD-h9JPyoRxxSM8-0rYsmLI0R6gAFJgAIAnC2PAICmDKwbjyGAEtzZZk8u4doSRkJk3KAAYi8l5AAbLg4AwB-zczwBaPAzRxCIBUNXcoABmBQi5-whESHgcoqp6RDH7LIAwzRVQ4DvrSFA5RuYgEQP2BKVDdzlDcgw6AABWBh4pszyS_kWF4OBcgLSFvEda3BZwKHAMAEYNRLYUltmSBW8Qb5QDvg_Lwz8D7K3ftYOO3J9GGOMQYVRBxg4GzIulF8Nj76P0tqFYy3IhqSSMUKaA7iJCeJQDbO2hRGIEESK1AAgngWs54AkJB5goLJeAHLV1pNESJeBom61DkzO8FTonR3GDBbwkR6jQAAGTtMGhJSpAhGTrV3HSK-Bx0mFOyXUIp2BjrIWGOUnpVSg6G3yZk7Jx05AdAkGUuZUTL75iTvER-PhGSSBwFgaS9TL5rLwBs4AWyTlYCSfs00TFjJdnuT2OocSjFBgMI00mDZXaU2gAAfm6Tst5pyPnlC-QkxYvhvFkQRbEkStNRAvJEnQO0dAU4BCvLOVAAgXzjmbFOAgjFdgsWaT4X6qBoC0kgESqh3p8AmLCFNSIkkFooP4JSvQuLs4sl3JuMONLuD50ciUFiJhGS4vsB3MAXdCAenHruAeJ5hUuE3MOUQIqI6cmgO4fhA1fiZllfKxVhzIjqP-AAcXQQoeIWqFpUsiJHO8E5kXgCGCxYQv0FqcjNUxBV5BCBUUDIavALxSxLlXhksuk91YTWjYuUmPLAlEoUMhVCrrZwsBZWdHAsr55uC8D4F4q8DgZJkJwEAFwQjWHCJEC24DSWR1LZEAIQRyBj21EMTik4ayhPVWHbknI7USQUNyZNjz6Ivz9mgidSYQDgAUDy6IsMjpN2AL4HtBL-0QOiIAMgIKQ1TyT_Cs877VLpXWujdMoXqaV8OakS-AICnsgr7P-egAH1EFUkDVOBSjZlyvUQqf6AO-HqO-osc6v0_qATAIBrhlFjvtUB0dtr7W60VheuDQhAHJuzNOpGn6j4LvYAoNWiB11geenoQGT6g1BiGFJd9hQGbDpcGfaAega3DNNI4sWqomJ6EAeBsO2ZxNKCReQYtbBNGLNxneZ-YcI7Jr-fUF2FNMy-Seee1-jJ_74akzgDDNRx0UanQCxc3JcrqeEzATTALtNZm6cWBlf5RAiG8lBmTPJrN1C8opgYyn1PcfqAGGuww8IAn41YwTR8jPRGTbZ-zDKIvV2ENF_4vnFiRay9uO-zUtpTRwJYsL0AgvPCWXXDa-XhqFaAjk-T-Rv5mWGEGXpITST1Ha51ox9Ryhkl8DxEZksNGjf6JybrRAsVKZzAAQnq8MRrzU4sJHGxNLIC2FuoYnU2NA_TNsgvvOZ-1B2wBHcNRNcofoAw_JQMyQY61LHTa8K8b-vWcvlBM5N-IX2ahbAJUkOQWBBunYMBZhQF3GTAGB6Dv75AAcGAyZENm4O9sUZh-YNmiOGickwNdjHmH9sTiuxouF1WHQ0EqAwJCKE0IZ2GJmgQEA2Y5irZmhnrr87aAZCoc2_m_WjTVAoOQiTaddpCzmEzGnbkjn-rp7RlrHu33vtEPr-AjGP3FiEDrWvTN6aR_LqQiuhvfyRzjqw8AVAaKzEN-oYQcAKGJ2d0nipfxDAUCNi3DQufZsMK7yH53_doVbmouFSK6rdRpwcOnWbGfTGZ7OGx5doj04DxQGATEFqvUqfSnlMnd7zefpxha4W8-3MgDgJXiwVchiCaJzXXWvC6-Gv1w32ikeV4LzX83FaGhW70Dbu34Ou8HHqCoe3EOUBQ5h1PvH_R6hgG9CoXYqB0flEx9DsnK_1Dr8Jov_7s5ujsD7zPufZOT_6DP0fpHaBFxB9n-dsnD-78NAgPSBQCg0hP8vx7z_CeH_Xcd_CLCdKwP_F_D3EICjKwX3H3AfeoUPSICASA_bZAwwb-XxRFKnZOWPfoePbnbgJPFnVPHKaITnBPHnGAPnNnQXEwYXPnUXcXIvKXEOZTWXCvKglAEglPNnCA9baAevNXJvPXDvHXZvIxbkcfDLbJfQYALAJMC0NArHMnAMOQs6RQtGPHSfZPVnNmVArfEnLHJgvhRADPMPSPXAmPVOAg6ADJMMSOAgAAJRGCEF0BkBmSvBckl3Yw4LL0ZGGFQFuWiAoAAD1ohQxEBNwhAgcwo2xZxhh3CcB4AZk4jEl8oKAKRBDdEZ9lUh0nwhURUSZl8wwYj0i2lQVSjXNvhEjkjfIz12CcxltVt8BBCqh_gZtt9xZOivBLFyBhDG8NcxCDcJCRjelpDfcuxORlUewjC3cscMDH4sC_Nu1MsGtx4ms6gWsys4UtBNEjchD21VchjJCcAxj28DdJiB9pj_hZj5jg90DuCIAuxk1t4054Vv5Bi2d1c3tPBriK16g-dhIzoVAwAEJwA9AVCd8PdgT5CwSVjKdrDyAcU49oALDXVmA0A18nCrxdgpAOdU1WwBQVgM1uDcTaDBhBBtUMDadFpsSJpHJhJWC_CZcAigiUAQjwjogMCsSwA182wMDkQpAKRMjsi9Ncih98ishS9Cj_1ijxheSRJ-SQBKiGgLQGS2lvgSSGi69jiG8fjRDLiW9PA299cJjDiuwpSxA5jDjLc0drdbdREx96hdgwhoSYc3S_Aj8kDniPSMCXi3isCrCiQatUS7D6ckjCZoAAA1W3dUOQPE5YHMDUYcHKJUauVsfgQlRMkwFjcwGAEsOkMk4aIQa2XwkvEzQI4IspbkrnKMtmOMtUQUmZMstmYUyQUUrIqkRYXIzkVHaMmUzgxU1swmJs1UNU-occrUhoDs3yI_a0nJWUwiIorjEc0ssc-Myc-soQac6Ab4HcuciCRYP4rsZHFAAc9HD5LIfsh0umGrAY_UkQ4Y407XVvM4gEosK0u8-4u0v3Ucgw_0gC0IYMtRKPGrVJZFCATgbgLIb42xWIEbGfR-UdcYt8zwXWWDMjK9XmG9TMddFtGsWjGUf6BjaDLCBLJIQzb9fDFPGCzCyioSe1KjAiklIiq6P6TSMi48gTUjKi8jSjBsGjDimULdHdfFPtNi_ANjDKFFb2OirgQ2ObQaFQZnXYFgLAftUyWCnMDRBJGdFJJiHjNUftV4XxWaZo0IbgCFLAbkclM_D5COevGoceAQDXdaB7C7P8cU7RPGe5T3FyCADUQYMpeoJIFAeYHy7-XI9iAAfXuTqH8phUAXCvmDyBUWZCEDTD4TwCB34GIlXnr3JjdnpyUDCiwGiHYn7W5DivuWkPspwHhUsV8V8WLSqsVExQCV3SGChGGBm2iGOHwAeT2ViEKEZHGsGrwCwEZHVhGn6E6SIB4wVQWn6HKEmumtmpWviAQPiHGsZHWsMxYiLAWsIB5COoODWrPymsOo-NGz2oOszQ0C2o6S6VOseqMVWugAevHg-u2ruomquumvcHEAbHmteoNRBvOv3K-sBsZGBtOChp2vIHuthrhyGBBympesWrRpwAxouEuqGth3h0xqRugBRsJtSTBN-SxtOspoxHIAJuurpuptJvJuuq9IOBOrrmjAuphsJo5qJH-v2thrFzZ2jK5tFsGHZ0ZumslujNZoBsJpFExAuC5uVvOGhoOvVqcD1lRCasNhgjgkQmeNMT2XonrTCBn0YGGhohHjqC7D2ru0DGDGMg6A8pqAgAACFFDigIAqJlqHEZQ_02QoAeiPaKQ-xCgLaxU5hrbhhbbCU7J_RnaDBVIUA3aEkvafa-B_agxA6mRg7fbDM5gIAGK-KmLF1cKDRb1iKmQUY0ZfAE6YB4AJIGxyLeLf5EsaLAEENoAgEhAUN_g46m70Mraba0ZS7LEsKqKktgFEMB7PJeRh6J7R6l7x6R4y7O7-LmKhK7066XRUYLRG6J7oAW6yYZKbC6SABpHAZ3F8HKU5Z1TSGQRM04C4diaAAM0VaAIIi4Q1F8MMU1NElfFjYXJkhaAvOudMC0QSd0BCKtFgVyhsWtGVOPNgngKyn-zSDfKwDwI21sNiNUaAXUbBwmPB_AXQGILdQmaIYYUhgwuLAASDobQBbiuRuTKWobZlofoY6kOJYZwb0BDEAcQCbvYc2WiA1wMCmoMoH1yN4CgCjEtpvOkemoUYgCUZQH6Ol2iB23Uc0axv0ejFh2TH5OsHztlDlJDqZF5FLvaIOAEfNnIfgnwEZENooZwCkbEAeW0bIkRP6EYf1qJB4p0Z205GXpHn6X0HCtpEEIspAg2kPudTvHCfXoEHsYEbIdgg8eKXcZccqu0MOMYdQDEAF00jKGyE0Tx0YduTX0QE0Z-1K2qar02BY37XKB2JWOauRMvC2AkoWiVGWxn2_olX4GpIWgnE8zpHQSSFpAdCdC1XznzgtsDBPkjgfv-C0GGAZH4PTOzzLmOP3GlD5WTidGzn1Q1JVKZCjswccfWmccoeVCIemFMCkh8DZgeeAi8dcpiTycodkfeGkdtyZFmg4ckZcuGttkOLxghcMwgBeZY34DR13Hse7UwbNF6rqFhbCREl8YwYbTgTjLoPWiefVC2HWOyxqAIwgCJYF3WmzHH30mVLX37wHwGDmAAx-yOj_X7TTvzt6opGZBHV91NBPHafPR5Y92Mn5bmFWJ8XgOwwooZF6orAZEck5NpBi2Sxpf53NkVf6D-dcdOkNZlZGH1b8R8SjxCZRPwPiAYE9tLArgID-bWcNXpT5x6S8zAZNvLmznAYrNCYWzXvjonqicGVib03iZirRjdR5FjrSdLr_LufOOyZcdydTd0AKYtEVZaqUoCRwgbBiwIkkCIh7OpwYHJaix4BclJgUErH9U2fpWQdbBoHQfXEPGEfDH-E0f0GAgixcgAFU62CUkFdKDKP0t6K6KNr1q78K97GRIZoYd1B3h3vV26lXJ3Z6h363R2cAL0GTFXp6p3BLqN53F3tA_A4cwpt2R2L7-hcjCL8AZsfxuqcB91SUNd92VTGQKN62ANR0v219PJlsYtdTeIpLilXpP9ohH28BH5dZPj5noAHXQbfVzmh6E2ih2QLK_1P7b4PDOQYBdgTk8PhJxz4FOTUGdENpUmQ27asgHbxqnbPLXb3bPhvbrHc7PHtoTxrGw7PgI76ZlMwmMO6O-kBkYmPZFhwy0S0xWpfoZn-JtRblY35p-B9jM776fVNjits5Zx1pGIDAZ4GBCOX6CBlPaQqO0Sz4bPbO7P7OHPHOHPjPoAYsNOHsYA4ccpfhhdZBl1DxnwGqvgXPAAiAmJTQGaFSuaADR3mgDC4nEi4iuaBxrxtC_C7AES-GGaCHzS4S6i_AGu1y8VEy-aE8B6RVCwCK4i6i7hNBLABc6c8a6a-a5s-M_QY6JqAib6VBYkY13-AzoezMwMBeYtEXHHdXj7KHsVDdFUoMXL3PTZzUrUE0um5Ej65qAG5qHNZ47lN5b_HW4ME24MCG__Gm9m_WmtZGRo6m7QC2m5bFalbW85CO8SXf04Kto905Hf15AA2VBrUaO6kHE2QGeXVjc9Y9RQQJLQ-1XbfVBVzcyWfgUgFtzwG_h6l9Uylco8K9XwG_lh_45QGLbSFuJqBG6XGvL_N6zY4BAePTup59InCf2qt919KIMMPPB9NMMzAxMD3KF7B9J3JbnB355Z65_MOAusGF57Dx2UqLBk7bjxV7SfuYgg6OJaRmkTL9e4N4P0PLn1QRs_tKQtwYEGC9ezlg6s7bna-o-4Fg-faOlfffZrGXJLdXMN3x-PDlJJ-G-s2l8q3NYt6g7KTt68Eu9OeQ_YDqdrade5stoji_qLPpG8-1T9GGGio2mDabvtr2ue-p7Tpe6zs44Dp25XKSD49scE-_jxh20z9DYk6GQqF93l9i7k4dWmYklma0E2VU-HHU70o860-rfl2FyMzwA5PZ2EBFYYGzlh7bXV8t9i5a6X-X9s6n9c82f749ure84hF89woC4GiC9WjZYYHi-K6i82rX7P-q6S6nyv_S5K_esLRP7i4f6i_hobHv7y6S5S9By__P6S7M0UA__G_lly9IgCMuUXOWmzDX4r84BS_KfkEF9y19ImPXEIsljmAvcp0cwMnmNzNoitasMdEYFpXO7zcfwi3AxMty0prdeQL3c1h3Usal89uNAzAfTzjbECzualS-P2B6iqhx4QwB8mnGb6rx7WkfURNH2zhMRxAFwNTCXW_oGglARlBgtnEzJ4BHcIuVUGLjCgED04TqdLhAjpQMoJA0SQQCIGzhJFLas4IxL8koa7NY2SoOmoLiGg6Dp-w4WcHAh4wiAVQFsX1EHywZcAJ4JLQjoyHsIqVdwJLPwSWFB7QVV8RiBfiIOt5FhciS9RUHiyaK6MS-rvJILy2la0DqeUVNluyw4G3c4K-pYqiqFKr4AnAFjSVodlyGsD9KnkL0gyx0HxAGqtPXll6Xfz9A-BgwE-I0zPytDPihQ9RAcUZZAhY6ioO7kHQe51CWBIwOgWkItZyMM-cwe3jKFfa9VH4GA4oWADD5pwfuxRCVrMMuz1CFh-QoVkoCWEe8HwJ4b3jwV96vEOWy8X8JQKMQ7DhguA7kF5GwEjB4OAPIsHkISSdsYsPbWMNS1pbmxswGuAFoUJuE1Aieu4e4bgJ7CMgxePPJkIoHxKeNeQXwyrL8L6qh8lhOGAzAJRnaro52tdBdi6CXYMhIR60ddoUKPaz1eq3wAkfB1aFHsBKLFM9jSIva-A6RurBkXK0FqVN-A-wwEQ0M8pRFQR0YXtnGB1LcgYR-AwoSSL9gIJpYWNPdiziHqsAOAXAA6KqP0yXpK6y6WdqeypHntL2-JSQIyLZbMju69QVkQ0AA44sJcRorkTvQtEiV96UMfkSSRqiCDV4wgitAwEzjC5N-vyOkLSnziKBlAagDQDkFrRLApARcHKPnFRjcB5orQ9OJGKzH0puAfCfzDGB9RmCIQESYQNDk1ADN3BURZ8NmKNHpwvS8os3jSRzy_IMC3IK0IWOdR6BkxwmKMWWPaA5iGAJJGAHr2p7UlaU7rBaAKhPBYcoAL4FAGgHlyCQRxiQtOLkTdFYtmQ6KLRq0Or5ujYcvtTRiYwMBmNpImQ1kEXTHHil54QYzcXVhtEkCuB0wzEedyoGrdXIbo-gRu0YFZDmB34vcfyGfGcC5uEox8VmLLzSljhu3R7kBLwDGRBWvwboVhDLx1AdsJmfIqCiwliBoavGZdKhNhCSRZww3SYSUP3ANgO2nvUvsiMeGHClAPYJ4SMBRFET4gGBG4E4DdpYt-uefVjpnQ46-0uONQ3jkXW1oPIuwXkSOq0JDEiDoAizTzsOEFBetsyt4P1O4PzinB_MgMI5knwjGbM-BCg3Ho2NcHTijBnqHQPTVw7qMcw5MfUUIjBDXApAeIUUL5HiGhiM4WcKCFoA_Bcg_UOUTMj_C9a_sCU3rNnjDXxBOARxDEHIGfnckJCDxwnBbBxK4kgBUWkEr6jrSyDqFSJPBciWADPLiT6g15EmFpjdgsRQUXkaGh3H4AItogOU0nvlMKn3AVaxUikGxJ6FyAshMZWKfNxqk4A6pKUrAG7TRG9T2pOYg4OxB6kgAz8AIitBxjlK_dwsURcoi5FryNj4gU03qXUEOA60ZIxYLqWkGmmzSJpow9TgtNL5LSSidRXQKkWGgVF0pq8LaTNPm67SLgzQA6XgG6m9TiR21CaQ1LIm7DmpkUsHBT2eln5oAAAHkqwnYqp5QcGbsSNHR5Chsk2Ln0yV4x9YOavalDh21QklhmBvIPtFNN7Q8JmEHEIQpJfC5AhxykqIvsxYg3TCUiDWuFe0ezrjWhD7CDusKZCO8IOLvNIP-0okbhbhXvTkKxPYGfDrMv4_SOTKD4wcuZRIh8cEwVagVLW1WfxGGVtb0BXOmidhCymgBYAJIP9bADwFpA8x1OvqEYKb0NmVxDwOUblCcm4AhShgM-BfmGOT5LMG0pwD6jbO354dFxQXBTh334hDRv680C4Dnk_rLAgGdhCjAaguDm9Ve0ddlFEDdlS5SmTWdIm5xlJ_FuQSxLwNyGdk4AAM43eIFw3Lhv0skSQAds5nKnRA9qLyRNr5WUyNzfww0Txp7R5h8w9ABQtOO33VD1B1INiAaFXNBCzhUgTuXKi5C1ZtIZIvuS6NAGSncEQkVRbsIADRyHsPnP-INBoabSLsIABRyTecvILkNBqo0AOeQPgXm7ZeingE7HvI3m5yd53wbsIfMfn1Az5F8itFfKLm_dV5XYDeT_JHRPyd5B8nsIAqUCeQP5DQCkGDEpyhkpQmNbRJXMQk1zyh-Fa-TUBQqLyt53IBbOAu4GCCak4cO8FvMXklEXUsWQ4v3P_JEEQkdDS2v_S0kq5YFq8OTDkH4DdM94HBVTCkxvlkKmkxxdaX3NpDIQB5fxLBgwoGY5RmF2jNhQpiRKAjuFtSWtn-wVLOxa5QKM8HgtXbFyw41ZDVqEQiIrTYiLkBIm4VulpEXIXZXuTBhEWHgGg-CiRdwH_r8J5oBADmMYvSIcxcSHMRmXdOGBeKWFacORRwoUUHBIKrM7OcZTJYUstWHMVmTe29QcxPyikZliAFZarx8F5QfBUfhwW-5c5qs5WYsHx5UJFANZLVpEv-CXcXgaNFTsqO0QW0444sbJHIBhHqy9Y1kciLkQQCks4ASAPmYQHrhpABhjVCCEAA&debug=false&forceAllTransforms=true&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=true&timeTravel=false&sourceType=module&lineWrap=false&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.13.10&externalPlugins=
 */
 
 function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

 function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

 function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

 function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

 function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

 function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

 function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

 function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

 function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

 function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

 function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

 function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 var JFdataLayer = /*#__PURE__*/function () {
   /**
    * Default classes to track for specific events/interactions
    * @type {Object}
    */
   function JFdataLayer() {
     var _this = this;

     var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
         _ref$logging = _ref.logging,
         logging = _ref$logging === void 0 ? false : _ref$logging,
         _ref$classes = _ref.classes;

     _ref$classes = _ref$classes === void 0 ? {
       events: 'js-trackEvent',
       items: 'js-trackItem',
       clicks: 'js-trackClick',
       quantity: 'js-trackQuantity'
     } : _ref$classes;
     var _ref$classes$events = _ref$classes.events,
         events = _ref$classes$events === void 0 ? 'js-trackEvent' : _ref$classes$events,
         _ref$classes$items = _ref$classes.items,
         items = _ref$classes$items === void 0 ? 'js-trackItem' : _ref$classes$items,
         _ref$classes$clicks = _ref$classes.clicks,
         clicks = _ref$classes$clicks === void 0 ? 'js-trackClick' : _ref$classes$clicks,
         _ref$classes$quantity = _ref$classes.quantity,
         quantity = _ref$classes$quantity === void 0 ? 'js-trackQuantity' : _ref$classes$quantity;

     _classCallCheck(this, JFdataLayer);

     _defineProperty(this, "debuggingEnabled", function (option) {
       if (option === undefined) {
         return _this.debug.enabled;
       }

       if (typeof option === "boolean") {
         /**
          * If the debugging is turned on, turn on our custom logging functions
          * @param  {[type]} typeof [description]
          * @return {[type]}        [description]
          */
         if (_this.debug.enabled === true) {
           _this.assignObj(_this.debug, console);

           _this.debug.info('%cJFdataLayer%c Debugging is enabled', 'background: #0066cc; border-radius: 3px; color: white; font-weight: bold; padding: 2px 5px;', '');
         } else {
           var replacement = function replacement() {};

           _this.assignObj(_this.debug, console, replacement);
         }
       }
     });

     _defineProperty(this, "assignObj", function (target, sources, replacement) {
       var loopArr = [];
       loopArr.push(sources);

       if (_typeof(sources) === 'object' && sources.length) {
         loopArr = Array.from(sources);
       }

       loopArr.forEach(function (source) {
         Object.keys(source).forEach(function (key) {
           target[key] = replacement === undefined ? source[key] : replacement;
         });
       });
       return target;
     });

     _defineProperty(this, "createDataLayer", function (trackingType, eventGroup, index) {
       _this.debug.groupCollapsed("".concat(_this.func, "createDataLayer(\u2026)"));

       _this.debug.groupCollapsed("".concat(_this.input, "parameters"));

       _this.debug.info('trackingType:', "'".concat(trackingType, "'"));

       _this.debug.info('%s %O', 'eventGroup:', eventGroup);

       _this.debug.info('index', index);

       _this.debug.groupEnd("".concat(_this.input, "parameters"));

       if (trackingType === null) {
         _this.debug.warn('trackingType', trackingType);

         return false;
       }

       if (typeof index === 'undefined') {
         _this.debug.info(trackingType, eventGroup, index, "index was 'undefined' so was set to '0'");

         index = 0;
       }

       if (index === 'customEvent') {
         _this.debug.info(index, "index was 'customEvent'");

         customTrigger = true;
         index = 0;
       }

       var customTrigger = false,
           ecommerceObj = {
         'ecommerce': {}
       },
           label,
           eventObj = {};

       if (!customTrigger) {
         label = !!eventGroup.data.label ? eventGroup.data.label : document.title;
         eventObj = {
           'event': trackingType,
           'eventCategory': eventGroup.data.category,
           'eventAction': eventGroup.data.action,
           'eventLabel': eventGroup.data.label
         };
       }
       /**
        * Product Impression (A product is visible in the viewport)
        */


       if (trackingType === 'checkout') {
         Object.assign(ecommerceObj.ecommerce, {
           'checkout': {
             'actionField': {
               'step': eventGroup.data.step
             },
             'products': eventGroup.products
           }
         });
       }
       /**
        * Product Impression (Product/s are purchased)
        */


       if (trackingType === 'purchase') {
         Object.assign(ecommerceObj.ecommerce, {
           'purchase': {
             'actionField': {
               'id': eventGroup.data.id,
               'affiliation': eventGroup.data.affiliation,
               'revenue': eventGroup.data.revenue,
               'tax': eventGroup.data.tax,
               'shipping': eventGroup.data.shipping,
               'coupon': eventGroup.data.coupon
             },
             'products': eventGroup.products
           }
         });
       }
       /**
        * Product Impression (A product is visible in the viewport)
        */


       if (trackingType === 'productImpression') {
         Object.assign(ecommerceObj.ecommerce, {
           'currencyCode': eventGroup.data.currencyCode,
           'impressions': eventGroup.viewedProducts
         });
       }
       /**
        * Add or Remove from Cart
        */


       if (trackingType.match(/^(addToCart|removeFromCart)$/)) {
         var eventStr = trackingType == 'addToCart' ? 'add' : 'remove';

         if (customTrigger) {
           eventObj = eventGroup.eventObj;
           Object.assign(ecommerceObj.ecommerce, _defineProperty({}, eventStr, eventGroup.productObj));
           customTrigger = false;
         } else {
           Object.assign(ecommerceObj.ecommerce, _defineProperty({}, eventStr, eventGroup.products[index]));
           Object.assign(eventObj, {
             'vigenciaPlan': eventGroup.data.vigencia
           });
         }
       }
       /**
        * Product Detail or Click (A user clicks a product or visits the product
        * detail page)
        */


       if (trackingType.match(/^(productDetail|productClick)$/)) {
         var actionStr = trackingType == 'productDetail' ? 'detail' : 'click';
         Object.assign(ecommerceObj.ecommerce, _defineProperty({}, actionStr, {
           'actionField': {
             'list': eventGroup.data.list
           },
           'products': eventGroup.products[index]
         }));
       }
       /**
        * Promotion View or Click (When a user sees or interacts with a promotion)
        */


       if (trackingType.match(/^(promotionView|promotionClick)$/)) {
         var eventAction = trackingType == 'promotionView' ? 'View' : 'Click',
             _actionStr = trackingType == 'promotionView' ? 'promoView' : 'promoClick';

         eventObj['eventAction'] = eventAction;
         Object.assign(ecommerceObj.ecommerce, _defineProperty({}, _actionStr, {
           'promotions': eventGroup.promotions
         }));
       }

       var result = Object.assign({}, eventObj, ecommerceObj);

       _this.debug.groupCollapsed("dataLayer".concat(_this.output));

       _this.debug.info(result);

       _this.debug.groupEnd("dataLayer".concat(_this.output));

       _this.debug.groupEnd("".concat(_this.func, "createDataLayer"));

       return result;
     });

     _defineProperty(this, "simplifyDataSet", function (element) {
       var newData = {};

       for (var _i = 0, _Object$entries = Object.entries(element.dataset); _i < _Object$entries.length; _i++) {
         var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
             key = _Object$entries$_i[0],
             value = _Object$entries$_i[1];

         if (key.startsWith('gtm')) {
           var new_key = key.replace('gtm', '').toLowerCase();
           Object.defineProperty(newData, new_key, {
             value: value
           });
         }
       }

       return newData;
     });

     _defineProperty(this, "createItemObj", function (query) {
       return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, query.name && {
         name: query.name
       }), query.id && {
         id: query.id
       }), query.price && {
         price: query.price
       }), query.brand && {
         brand: query.brand
       }), query.category && {
         category: query.category
       }), query.variant && {
         variant: query.variant
       }), query.list && {
         list: query.list
       }), query.position && {
         position: query.position
       }), query.quantity && {
         quantity: query.quantity
       });
     });

     _defineProperty(this, "observeProducts", function () {
       var eventDomNodes = _toConsumableArray(document.getElementsByClassName(_this.trackingClass.events));

       var itemDomNodes = document.getElementsByClassName(_this.trackingClass.items);

       _this.debug.groupCollapsed("".concat(_this.DOMnode, "Nodes Found"));

       _this.debug.info('%s %o', 'eventDomNodes:', eventDomNodes);

       _this.debug.info('%s %o', 'itemDomNodes:', itemDomNodes);

       _this.debug.groupEnd("".concat(_this.DOMnode, "Nodes Found"));
       /**
        * Keep an eye out for any new products that may be added
        * after the page has loaded. SPA friendly.
        */


       var mutationObserver = new MutationObserver(function (mutations) {
         mutations.forEach(function (mutation) {
           var _this2 = this;

           mutation.addedNodes.forEach(function (entry) {
             var classList = entry.classList;

             if (!!classList && classList.contains(_this2.trackingClass.items)) {
               mutableObserver.observe(entry);
             }
           });
         });
       });

       if (!!eventDomNodes.length) {
         var _iterator = _createForOfIteratorHelper(eventDomNodes),
             _step;

         try {
           for (_iterator.s(); !(_step = _iterator.n()).done;) {
             var node = _step.value;
             mutationObserver.observe(node, {
               attributes: false,
               childList: true,
               characterData: false
             });
           }
         } catch (err) {
           _iterator.e(err);
         } finally {
           _iterator.f();
         }
       } // Create a custom event that passes the dataset through
       // This is consumable on event emission as an object within
       // the event details.


       var mutableObserver = new IntersectionObserver(function (entries, observer) {
         entries.forEach(function (entry) {
           if (entry.isIntersecting) {
             var thisItem = entry.target;
             var isVisible = new CustomEvent('isVisible', {
               detail: {
                 itemType: _this.trackingData.get(thisItem).type,
                 trackingData: _this.trackingData.get(thisItem)
               }
             });
             thisItem.dispatchEvent(isVisible);
             observer.unobserve(thisItem);
           }
         });
       });
       /**
        * Bind our observable behaviour to the products on the page
        */

       if (!!itemDomNodes.length) {
         var _iterator2 = _createForOfIteratorHelper(itemDomNodes),
             _step2;

         try {
           for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
             var _node = _step2.value;
             mutableObserver.observe(_node);
           }
         } catch (err) {
           _iterator2.e(err);
         } finally {
           _iterator2.f();
         }
       }
     });

     _defineProperty(this, "triggerCartEvent", function (eventObj, productObj, updateType) {
       function anyArgUndefined() {
         for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
           args[_key] = arguments[_key];
         }

         if (args.some(Boolean)) {
           throw 'Missing Args: registerCartEvent(' + "".concat(!productObj ? ' [✖]productObj, ' : ' [✔]productObj, ') + "".concat(!eventObj ? ' [✖]eventObj, ' : ' [✔]eventObj, ') + "".concat(!updateType ? ' [✖]updateType, ' : ' [✔]updateType, ') + ')';
         }
       }

       try {
         anyArgUndefined(!eventObj, !productObj, !updateType);

         if (_typeof(productObj) !== 'object') {
           throw 'productObj must be an Object';
           return false;
         }

         if (_typeof(eventObj) !== 'object') {
           throw 'eventObj must be an Object';
           return false;
         }

         if (_typeof(updateType) === undefined || !updateType.match(/^(addToCart|removeFromCart)$/)) {
           throw 'updateType must be either "addToCart" or "removeFromCart"';
           return false;
         }

         var cartEvent = new CustomEvent("cartUpdated", {
           detail: {
             updateType: updateType,
             productObj: productObj,
             eventObj: eventObj
           }
         });
         window.dispatchEvent(cartEvent);
       } catch (e) {
         console.error(e);
       }
     });

     this.trackingClass = {
       events: events,
       items: items,
       clicks: clicks,
       quantity: quantity
     };
     this.trackingData = new WeakMap();
     this.debug = {}; // DOM Stuff

     document.addEventListener('DOMContentLoaded', function () {
       window.dataLayer = window.dataLayer || []; // Check if dataLayer already exists

       window.eventTracking = window.eventTracking || []; // Check if eventTracking already exists

       _this.setDebugger(logging);

       _this.observeProducts();

       _this.bindEventTracking();
     });
   }

   _createClass(JFdataLayer, [{
     key: "timeNow",
     value: function timeNow() {
       var d = new Date(),
           dh = d.getHours() + '',
           dm = d.getMinutes() + '',
           ds = d.getSeconds() + '';
       dh = dh.padStart(2, '0');
       dm = dm.padStart(2, '0');
       ds = ds.padStart(2, '0');
       return "".concat(dh, ":").concat(dm, ":").concat(ds);
     }
   }, {
     key: "setDebugger",
     value: function setDebugger(option) {
       // Setting some visual cruft for the debugger:
       var t = this.timeNow();
       this.func = "".concat(t, " \u2394 ");
       this.input = '⮕ ';
       this.output = ' ⮕';
       this.DOMevt = "".concat(t, " \u203B ");
       this.DOMnode = "\u2208 ";
       if (option === undefined) return;

       if (typeof option === "boolean") {
         this.debug.enabled = option;
         this.debuggingEnabled(option);
       }
     }
   }, {
     key: "bindEventTracking",
     value: function bindEventTracking() {
       var _this3 = this;

       /** Custom cart update event handler **/
       window.addEventListener('cartUpdated', function (e) {
         _this3.debug.groupCollapsed("".concat(_this3.DOMevt, "cartUpdated"));

         _this3.debug.info('Updated', e.detail);

         _this3.debug.groupEnd("".concat(_this3.DOMevt, "cartUpdated"));

         var dataLayerObj = _this3.createDataLayer(e.detail.updateType, e.detail, 'customEvent');

         dataLayer.push(dataLayerObj);
       }); // Bind to the eventDomNodes class for tracking passive events like pageViews etc.

       var eventDomNodes = _toConsumableArray(document.getElementsByClassName(this.trackingClass.events));

       if (!!eventDomNodes.length) {
         /**
          * Loop through each of these elements and trigger the relevant
          * events for each.
          * ==================================================
          * Event elements can track the following values:
          * • data-gtm-event
          * • data-gtm-category
          * • data-gtm-action
          * • data-gtm-label
          * • data-gtm-journey
          * • data-gtm-vigencia
          * ==================================================
          */
         eventDomNodes.forEach(function (eventElement, eventIndex) {
           var eventDataSimple = _this3.simplifyDataSet(eventElement);

           _this3.trackingData.set(eventElement, eventDataSimple);

           var eventData = _this3.trackingData.get(eventElement),
               trackingType = eventData.event,
               itemType = null; // Cache all of our data back to the window Object so is is easier
           // to retrieve later


           window.eventTracking[eventIndex] = {
             'element': eventElement,
             'data': eventData,
             'products': [],
             'viewedProducts': [],
             'promotions': [],
             'viewedPromotions': []
           };
           /**
            * Create our dataLayer Object for the productImpression event and push
            * it to the dataLayer.
            */

           var dataLayerObj = _this3.createDataLayer(trackingType, window.eventTracking[eventIndex], 0);

           dataLayer.push(dataLayerObj); // Build up our list of products within the dom

           var itemDomNodes = _toConsumableArray(eventElement.getElementsByClassName(_this3.trackingClass.items));

           if (!!itemDomNodes.length) {
             /**
              * Loop through each of these elements and cache the information to
              * the window object.
              * ==================================================
              * Event elements can track the following values:
              * • data-gtm-name
              * • data-gtm-id
              * • data-gtm-price
              * • data-gtm-brand
              * • data-gtm-category
              * • data-gtm-variant
              * • data-gtm-list
              * • data-gtm-position
              * ==================================================
              */
             itemDomNodes.forEach(function (itemElement, itemIndex) {
               var itemDataSimple = _this3.simplifyDataSet(itemElement);

               _this3.trackingData.set(itemElement, itemDataSimple); // write

               /**
                * Build up the array of items that appear in the user's viewport
                * The dataLayer has access to the most recent version of a variable so
                * there is no need to push multiple events. A single push will suffice.
                */


               var itemData;

               if (!_this3.trackingData.get(itemElement)) {
                 itemData = Object.defineProperty(_this3.trackingData.get(itemElement), 'list', {
                   value: eventData.list,
                   writable: true
                 });
               } else {
                 itemData = _this3.trackingData.get(itemElement);
               }

               var itemObj = _this3.createItemObj(itemData);

               itemType = _this3.trackingData.get(itemElement).type;
               window.eventTracking[eventIndex][itemType].splice(itemIndex, 0, itemObj);
               itemElement.addEventListener('isVisible', function (e) {
                 window.eventTracking[eventIndex].viewedProducts.splice(itemIndex, 0, itemObj);

                 _this3.debug.groupCollapsed("".concat(_this3.DOMevt, "isVisible"));

                 _this3.debug.info('Item: ', itemObj);

                 _this3.debug.groupEnd("".concat(_this3.DOMevt, "isVisible"));
               }, false);
               itemElement.addEventListener('click', function (e) {
                 _this3.debug.enabled && e.preventDefault();

                 _this3.debug.groupCollapsed("".concat(_this3.DOMevt, "click"));

                 _this3.debug.info('Item: ', e.target);

                 _this3.debug.groupEnd("".concat(_this3.DOMevt, "click"));
                 /**
                  * If the element that is specifically clicked on is not the
                  * element that we intend to track, stop. We are adding the
                  * listener to the parent product, but we only want to track
                  * clicks on elements that have the tracking class attached.
                  */


                 var target = e.target;
                 if (!target.classList.contains(_this3.trackingClass.clicks)) return;

                 var clickDataSimple = _this3.simplifyDataSet(target);

                 _this3.trackingData.set(target, clickDataSimple);

                 var trackingTypeStr = _this3.trackingData.get(target).track,
                     trackingType = !!trackingTypeStr ? trackingTypeStr : null,
                     currentItemData = window.eventTracking[eventIndex][itemType][itemIndex],
                     productQtyEl = eventElement.getElementsByClassName(_this3.trackingClass.quantity)[0];
                 /**
                  * This checks to see if there is an input within the event wrapper
                  * that has a relevant tracking class (default: 'js-trackQuantity').
                  * If this exists, then use this to update the products quantity
                  * value.
                  */


                 if (!!productQtyEl) {
                   var qty = currentItemData['quantity'] === undefined ? 0 : parseInt(currentItemData['quantity']),
                       workingValue = parseInt(productQtyEl.value),
                       newValue;

                   if (trackingType === 'addToCart') {
                     newValue = qty + workingValue;
                   } else if (trackingType === 'removeFromCart') {
                     newValue = qty - workingValue;
                   }

                   currentItemData['quantity'] = newValue < 0 ? 0 : newValue;
                 }
                 /**
                  * Create our dataLayer Object for the click event and push
                  * it to the dataLayer. This also tracks adds and removes from cart.
                  */


                 var dataLayerObj = _this3.createDataLayer(trackingType, window.eventTracking[eventIndex], itemIndex);

                 dataLayer.push(dataLayerObj);
               });
             });
           }
         });
       }
     }
   }]);

   return JFdataLayer;
 }();

 var JF = new JFdataLayer({
   logging: true
 });
