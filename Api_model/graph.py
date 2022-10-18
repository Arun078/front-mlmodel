import io
import warnings
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
warnings.filterwarnings("ignore")


def read_data():
    df = pd.read_excel('Api_model\Datafile.xlsx', sheet_name= 'Generation')
    return df


def distplots():
    df = read_data()
    fig, ax = plt.subplots(6, 2, figsize=(15, 13))
    sns.boxplot(x=df["Distance_to_Solar_Noon"], ax=ax[0, 0])
    sns.distplot(df["Distance_to_Solar_Noon"], ax=ax[0, 1])
    sns.boxplot(x=df["Average_Temperature"], ax=ax[1, 0])
    sns.distplot(df["Average_Temperature"], ax=ax[1, 1])
    sns.boxplot(x=df["Average_Wind_Direction"], ax=ax[2, 0])
    sns.distplot(df['Average_Wind_Direction'], ax=ax[2, 1])
    sns.boxplot(x=df["Average_Wind_Speed"], ax=ax[3, 0])
    sns.distplot(df["Average_Wind_Speed"], ax=ax[3, 1])
    sns.boxplot(x=df["Relative_Humidity"], ax=ax[4, 0])
    sns.distplot(df["Relative_Humidity"], ax=ax[4, 1])
    sns.boxplot(x=df["Average_Barometric_Pressure"], ax=ax[5, 0])
    sns.distplot(df["Average_Barometric_Pressure"], ax=ax[5, 1])

    bytes_image = io.BytesIO()
    plt.savefig(bytes_image, format='png')
    bytes_image.seek(0)
    return bytes_image


    # plt.tight_layout()
    # return fig


def scatterplots():
    df = read_data()
    f, axarr = plt.subplots(2, 2, figsize=(10, 10))

    pg = df['Power_Generated'].values
    axarr[0, 0].scatter(df["Distance_to_Solar_Noon"].values, pg)
    axarr[0, 0].set_title("Distance_to_Solar_Noon")
    axarr[0, 1].scatter(df["Average_Temperature"].values, pg)
    axarr[0, 1].set_title("Average_Temperature")
    axarr[1, 0].scatter(df["Average_Wind_Direction"].values, pg)
    axarr[1, 0].set_title("Average_Wind_Direction")
    axarr[1, 1].scatter(df["Relative_Humidity"], pg)
    axarr[1, 1].set_title("Relative_Humidity")

    f.text(-0.01, 0.5, 'Power_Generated', va='center', rotation='vertical', fontsize=12)
    # plt.tight_layout()
    # plt.show()

    bytes_image = io.BytesIO()
    plt.savefig(bytes_image, format='png')
    bytes_image.seek(0)
    return bytes_image

    # return  f