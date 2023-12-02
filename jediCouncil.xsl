<?xml version="1.0" encoding="UTF-8" ?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output method="html" doctype-public="XSLT-compat" omit-xml-declaration="yes" encoding="UTF-8" indent="yes" />

    <xsl:template match="/">
        <head>
            <title>Consejo Jedi</title>
        </head>
        <body>
            <main id="container">
                <h1>Jedi Council</h1>
                <xsl:apply-templates/>
            </main>
        </body>
    </xsl:template>


    <xsl:template match="consejoJedi">
        <div id="cardContainer">
            <xsl:for-each select="jedi">
                <div id="{nombre/@apellido}" class="{concat('card ', rango)}">
                    <img src="{img/@src}" alt="{concat(nombre, '_', nombre/@apellido)}"/>
                    <h2><xsl:value-of select="nombre" /><xsl:text> </xsl:text><xsl:value-of select="nombre/@apellido" /></h2>
                    <h3><xsl:value-of select="rango"/> Jedi</h3>
                                        <ul>
                        <li>"Color de sable: <xsl:value-of select="sableLaser/@color"/>"</li>
                        <li>"<xsl:value-of select="especie"/>  : <xsl:value-of select="especie/@genero"/>"</li>
                        <li>"Fallecio en <xsl:value-of select="fallecimiento/@lugar"/> (<xsl:value-of select="fallecimiento"/>)"</li>
                    </ul>

                </div>
            </xsl:for-each>
        </div>
    </xsl:template>

</xsl:transform>