import React from 'react';
import { Row, Col, Card } from 'antd';
import D3VerticalBPChartFifth from '../components/charts/D3VerticalBPChartFifth';

class VerticalBPChartFifth extends React.Component {
    render() {
        const data = [['Microsoft/vscode', 'Microsoft/', 143], ['eclipse/smarthome', 'Microsoft/', 19], ['getgauge/gauge', 'Microsoft/', 6], ['Level/memdown', 'Microsoft/', 2], ['FloEdelmann/open-fixture-library', 'Microsoft/', 2], ['PolymerLabs/arcs-cdn', 'Microsoft/', 2], ['golang/dep', 'hashicorp/terraform', 298], ['vmware/vic', 'hashicorp/terraform', 4], ['openebs/openebs', 'hashicorp/terraform', 2], ['conda/conda', 'conda/conda', 259], ['vega/vega', 'conda/conda', 3], ['palantir/python-language-server', 'conda/conda', 2], ['ckeditor/ckeditor5-build-classic', 'NativeScript/NativeScript', 19], ['spinnaker/deck', 'NativeScript/NativeScript', 3], ['spring-cloud/spring-cloud-stream', 'NativeScript/NativeScript', 3], ['scylladb/scylla', 'spring-projects/spring-boot', 14], ['openzipkin/brave', 'spring-projects/spring-boot', 3], ['ipfs/go-ipfs', 'vfeskov/gitpunch', 17], ['mozilla/addons-server', 'vfeskov/gitpunch', 12], ['ros2/demos', 'ros-infrastructure/ros_buildfarm', 49], ['PX4/Firmware', 'ros-infrastructure/ros_buildfarm', 5], ['googlecartographer/cartographer_ros', 'ros-infrastructure/ros_buildfarm', 2], ['GoogleCloudPlatform/google-cloud-node', 'cms-sw/cmssw', 154], ['ManageIQ/manageiq-ui-classic', 'ManageIQ/', 86], ['CyclopsMC/IntegratedDynamics', 'BluSunrize/ImmersiveEngineering', 24], ['trufflesuite/ganache-cli', 'trufflesuite/ganache', 17], ['OCA/server-tools', 'odoo/', 15], ['oknosoft/windowbuilder', 'realm/realm-object-store', 12], ['vector-im/riot-web', 'vector-im/riot-web', 8], ['LLK/scratch-gui', 'LLK/scratch-gui', 6], ['scality/S3', 'scality/S3', 6], ['OPM/opm-simulators', 'OPM/opm-simulators', 5], ['IATI/IATI-Codelists', 'org-id/register', 5], ['citra-emu/citra-web', 'citra-emu/citra-web', 5], ['apple/swift', 'apple/', 3], ['spring-cloud/spring-cloud-dataflow', 'spring-cloud/spring-cloud-dataflow', 3], ['liqd/a4-meinberlin', 'liqd/a4-meinberlin', 3], ['hbz/lobid-resources', 'solid/node-solid-server', 3], ['eclipse/openj9', 'eclipse/openj9', 3], ['OHDSI/WebAPI', 'OHDSI/WebAPI', 3], ['certtools/intelmq', 'certtools/intelmq', 3], ['jenkinsci/comments-remover-plugin', 'jenkinsci/jenkins', 3], ['fossasia/susi_skill_cms', 'fossasia/susi_skill_cms', 3], ['golemfactory/golem-electron', 'golemfactory/golem', 3], ['openstreetmap/iD', 'tensorflow/tfjs-core', 3], ['dedis/onet', 'dedis/onet', 3], ['frappe/erpnext', 'frappe/erpnext', 2], ['autotest/tp-qemu', 'autotest/tp-qemu', 2], ['Cadasta/cadasta-platform', 'Cadasta/django-jsonattrs', 2], ['Unvanquished/Unvanquished', 'Unvanquished/Unvanquished', 2], ['simpeg/simpeg', 'simpeg/simpeg', 2], ['PhoenicisOrg/POL-POM-5', 'PhoenicisOrg/phoenicis', 2], ['stefan-niedermann/nextcloud-notes', 'stefan-niedermann/nextcloud-notes', 2], ['consul/consul', 'consul/consul', 2], ['easybuilders/easybuild-easyconfigs', 'easybuilders/easybuild-easyconfigs', 2], ['steemit/condenser', 'OAI/OpenAPI-Specification', 2], ['neos/neos-ui', 'neos/neos-development-collection', 2], ['volumio/Volumio2', 'volumio/Volumio2-UI', 2], ['gslab-econ/template', 'gslab-econ/gslab_python', 2], ['apache/beam-site', 'apache/beam-site', 2], ['metasfresh/metasfresh', 'metasfresh/metasfresh-webui-api', 2], ['sul-dlss/preservation_catalog', 'sul-dlss/preservation_catalog', 2], ['ilios/frontend', 'ilios/frontend', 2], ['ReactionMechanismGenerator/RMG-Py', 'ReactionMechanismGenerator/RMG-database', 2], ['18F/openFEC', 'fecgov/openFEC', 2], ['mozilla-lockbox/lockbox-datastore', 'mozilla-lockbox/lockbox-extension', 2], ['qri-io/qri', 'qri-io/qri', 2], ['SharePoint/sp-dev-fx-webparts', 'SharePoint/sp-dev-fx-webparts', 2], ['modoboa/modoboa', 'modoboa/modoboa', 2], ['artefactual/archivematica', 'artefactual/archivematica', 2], ['couchbase/sync_gateway', 'couchbase/couchbase-lite-core', 2], ['ckeditor/ckeditor5-build-classic', 'NativeScript/NativeScript', 9.5], ['ckeditor/ckeditor5-build-classic', 'ckeditor/ckeditor5', 9.5], ['eclipse/smarthome', 'Microsoft/', 9.5], ['eclipse/smarthome', 'openhab/openhab2-addons', 9.5], ['ipfs/go-ipfs', 'vfeskov/gitpunch', 8.5], ['ipfs/go-ipfs', 'ipfs-shipyard/ipfs-webui', 8.5]];


 
        return (
            <div className="gutter-example virtical-bp-chart-fifth-demo">
                <Row gutter={10}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="2015下到2016上" bordered={false}>
                                <D3VerticalBPChartFifth data={data} />
                            </Card>
                        </div>
                    </Col>
                </Row>             
            </div>
        )
    }
}

export default VerticalBPChartFifth;