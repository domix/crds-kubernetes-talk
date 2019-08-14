# crds-kubernetes-talk


Podemos preguntarle a Kubernetes cuales `CRDs` conoce

    $ kubectl get crd
    No resources found.


## Crear un CRD desde el CLI

    $ kubectl apply -f crd.yaml
    customresourcedefinition.apiextensions.k8s.io/sswebsites.crds.cloudnative.mx created

Ahora podemos verificar si fue creado:

    $ kubectl get crd
    NAME                             CREATED AT
    sswebsites.crds.cloudnative.mx   2019-08-14T09:05:07Z

Una vez creada la estructura, se puede proceder a crear "instancias" de ese `CRD`

## Crear nuevas instancias del CRD

    $ kubectl apply -f data-crd.yaml
    simplewebsiteconfig.crds.cloudnative.mx/domix-website created

